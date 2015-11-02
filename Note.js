var Note = React.createClass({
    getInitialState: function() {
        return {editing: false}
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
       	this.props.onChange(this.refs.newText.getDOMNode().value,this.props.index);
        this.setState({editing: false});
    },
    remove: function() {
        this.props.onRemove(this.props.index);
    },
	componentDidMount: function(){
        $(this.getDOMNode()).draggable();
    },
    renderDisplay: function() {
        return (
            <div className="note">
				<div className="stock_title"><h4><label>浦发银行</label><span>600000</span></h4></div>
				<div className="table_name">
					<div className="buy">买盘</div>
					<div className="sell">卖盘</div>
				</div>
                <div className="trade_info_table">
					<table>					
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
					</table>
					<table>		
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>
							<tr><td>10.08</td><td>10</td></tr>						
					</table>
				</div>
				<div className="stock_info">
					<h6><label>最新：</label><span>22.36</span></h6>
					<h6><label>开盘：</label><span>22.36</span></h6>
					<h6><label>最高：</label><span>23.00</span></h6>
					<h6><label>最低：</label><span>21.00</span></h6>
					<h6><label>涨幅：</label><span>2.32%</span></h6>
					<h6><label>涨跌：</label><span>2.36</span></h6>				
					<h6><label>可用：</label><span>10000</span></h6>
					<h6><label>仓位：</label><span>10000</span></h6>
					<div><button type="button" className="btn btn-danger">买</button>
					<button type="button" className="btn btn-success">卖</button></div>
					<div><button type="button" className="btn btn-info">平</button>
					<button type="button" className="btn btn-warning">撤</button></div>
					<h6><label>买价：</label><span>20.22</span></h6>
					<h6><label>数量：</label><span>100</span></h6>
					<h6><label>卖价：</label><span>20.22</span></h6>
					<h6><label>数量：</label><span>100</span></h6>
				</div>
				<span><button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/></span>
            </div>
            );
    },
    renderForm: function() {
        return (
            <div className="note">
            <textarea ref="newText" defaultValue={this.props.children} 
            className="form-control"></textarea>
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
            )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});

var Board=React.createClass({
	propTypes:{
		count:function(props,propName){
			if(typeof props[propName]!=="number"){
				return new Error('The count property must be a number');
			}
			if(props[proName]>100){
				return new Error('Creating' + props[propName] +"notes is ridiculous");
			}
		}
	},
	getInitialState:function(){
		return{
			notes:[
				
			]
		};
	},
	add:function(text){
		var arr=this.state.notes;
		arr.push(text);
		this.setState({notes:arr});
	},
	update:function(newText,i){
		var arr=this.state.notes;
		arr[i]=newText;
		this.setState({notes:arr});
	},
	remove:function(i){
		var arr=this.state.notes;
		arr.splice(i,1);
		this.setState({note:arr});
	},
	eachNote:function(note,i){
		return(  
			 <Note key={i}
                    index={i}
                    onChange={this.update}
                    onRemove={this.remove}
              >{note}</Note>
			  );
	},
	render:function(){
		return (<div className="board">{
				this.state.notes.map(this.eachNote)}
				<button className="btn btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null,"New Note")}/>
				</div>
							);
}
});
React.render(<Board count={10}/>, 
    document.getElementById('react-container'));

