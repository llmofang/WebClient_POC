var OrderTable = React.createClass({
	handleClick:function(){
		alert('123');
	},
	
	render: function(){
		return(<table>	
				<tr><td onClick={this.handleClick}>10.08</td><td>10</td></tr>
				<tr><td>10.08</td><td>10</td></tr>
				<tr><td>10.08</td><td>10</td></tr>
				<tr><td>10.08</td><td>10</td></tr>
				<tr><td>10.08</td><td>10</td></tr>
				<tr><td>10.08</td><td>10</td></tr>
				<tr><td>10.08</td><td>10</td></tr>
				<tr><td>10.08</td><td>10</td></tr>
				<tr><td>10.08</td><td>10</td></tr>
				<tr><td>10.08</td><td>10</td></tr>
		</table>);
	}
	
})


var TradeFrame = React.createClass({
    getInitialState: function() {
        return {editing: false,
				price:0.00,
				amount:0
			   }
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
	handleChange:function(name,event){
		var newState={};
		newState[name]=event.target.value;
		this.setState(newState);
	},
	handleClick:function(event){
		this.setState({'price':event.target.innerHTML});
	},
    renderDisplay: function() {
        return (
            <div className="trade_frame">
				<div className="stock_title" ><h4><label>浦发银行</label><span>600000</span></h4>
				<input type="text" className="form-control"/>
			</div>
				<div className="table_name">
					<div className="buy">买盘</div>
					<div className="sell">卖盘</div>
				</div>
                <div className="trade_info_table">
					<table>	
						<tr><td onClick={this.handleClick}>10.01</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.02</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.03</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.04</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.05</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.06</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.07</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.08</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.09</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.00</td><td>10</td></tr>
					</table>
					<table>	
						<tr><td onClick={this.handleClick}>10.01</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.02</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.03</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.04</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.05</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.06</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.07</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.08</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.09</td><td>10</td></tr>
						<tr><td onClick={this.handleClick}>10.00</td><td>10</td></tr>
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
					<h6><label>价格：</label><input  type="text"  onChange={this.handleChange.bind(this, 'price')} value={this.state.price} /></h6>
					<h6><label>数量：</label><input type="text" onChange={this.handleChange.bind(this, 'amount')} value={this.state.amount} /></h6>
				</div>
				<span><button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/></span>
            </div>
            );
    },
 
    render: function() {
            return this.renderDisplay();
    }
});

var Board=React.createClass({
	propTypes:{
		count:function(props,propName){
			if(typeof props[propName]!=="number"){
				return new Error('The count property must be a number');
			}
			if(props[proName]>5){
				return new Error('Creating' + props[propName] +"TradeFrame is ridiculous");
			}
		}
	},
	getInitialState:function(){
		return{
			tradeframes:[
				
			]
		};
	},
	add:function(text){
		var arr=this.state.tradeframes;
		arr.push(text);
		this.setState({tradeframes:arr});
	},
	update:function(newText,i){
		var arr=this.state.tradeframes;
		arr[i]=newText;
		this.setState({tradeframes:arr});
	},
	remove:function(i){
		var arr=this.state.tradeframes;
		arr.splice(i,1);
		this.setState({tradeframes:arr});
	},
	eachTradeFrame:function(tradeframe,i){
		return(  
			 <TradeFrame key={i}
                    index={i}
                    onChange={this.update}
                    onRemove={this.remove}
              >{tradeframe}</TradeFrame>
			  );
	},
	render:function(){
		return (<div className="board">{
				this.state.tradeframes.map(this.eachTradeFrame)}
				<button className="btn btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null,"New TradeFrames")}/>
				</div>
							);
}
});
React.render(<Board count={10}/>, 
    document.getElementById('react-container'));


