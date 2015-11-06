var FrameBoard=React.createClass({
	addTableFrame:function(name){
		var newState={};
		newState[name]=true;
		this.setState(newState);
	},
	
	getInitialState:function(){
		return{
			entrustFrame:false,
			positionFrame:false,
			logFrame:false,
			infoStatFrame:false
		}
	},
	showEntrustFrame:function(){
		
		if(this.state.entrustFrame){
			return <EntrustFrame></EntrustFrame>
		}
	},
	showPositionFrame:function(){
		if(this.state.positionFrame){
			return <PositionFrame></PositionFrame>
		}
	},
	showLogFrame:function(){
		if(this.state.logFrame){
			return <LogFrame></LogFrame>
		}
	},
	showInfoStatFrame:function(){
		if(this.state.infoStatFrame){
			return <InfoStatFrame></InfoStatFrame>
		}
	},
	render:function(){
		return (
			<div className="position_div">
				<div className="btn-group">
				   <button type="button" className="btn btn-default dropdown-toggle" 
					  data-toggle="dropdown">
					  添加 <span className="caret"></span>
				   </button>
				   <ul className="dropdown-menu" role="menu">
					  <li><a onClick={this.addTableFrame.bind(this,"entrustFrame")}>委托</a></li>
					  <li><a onClick={this.addTableFrame.bind(this,"positionFrame")}>仓位</a></li>
					  <li><a onClick={this.addTableFrame.bind(this,"logFrame")}>交易记录</a></li>
					  <li><a onClick={this.addTableFrame.bind(this,"infoStatFrame")}>信息统计</a></li>
				   </ul>
				</div>
				<div>
					{this.showEntrustFrame()}
					{this.showPositionFrame()}
					{this.showLogFrame()}
					{this.showInfoStatFrame()}
				</div>
			</div>
		)
	}
	
})

var EntrustFrame=React.createClass({
	getInitialState:function(){
		return{
			
		};
	},
	componentDidMount: function(){
		$(this.getDOMNode()).resizable({
      		ghost: true,
			animate: true
		});
        $(this.getDOMNode()).draggable();
		
    },
	render:function(){
		return	(
			<div className="table_frame" id="entrust_frame">
			<div className="table_title"><h4>委托</h4></div>
			<table className="table table-bordered table-striped table-condensed table-hover">
				<thead>
					<tr>
						<th>账户</th>
						<th>交易类型</th>
						<th>证券代码</th>
						<th>证券名称</th>
						<th>委托数量</th>
						<th>委托价格</th>
						<th>委托编号</th>
						<th>委托时间</th>
					</tr>
				</thead>
				<tbody>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
				</tbody>
			</table>
			</div>
			)
			;
	}
});

var PositionFrame=React.createClass({
	getInitialState:function(){
		return{
			
		};
	},
	componentDidMount: function(){
		$(this.getDOMNode()).resizable({
      		ghost: true,
			animate: true
		});
        $(this.getDOMNode()).draggable();
		
    },
	render:function(){
		return	(
			<div className="table_frame">
			<div className="table_title"><h4>仓位</h4></div>
			<table className="table table-bordered table-striped table-condensed table-hover">
				<thead>
					<tr>
						<th>账户</th>
						<th>证券代码</th>
						<th>证券名称</th>
						<th>方向</th>
						<th>股数</th>
						<th>当前浮盈</th>
						<th>平均价格</th>
					</tr>
				</thead>
				<tbody>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
				</tbody>
			</table>
			</div>
			)
			;
	}
});

var LogFrame=React.createClass({
	getInitialState:function(){
		return{
			
		};
	},
	componentDidMount: function(){
		$(this.getDOMNode()).resizable({
      		ghost: true,
			animate: true
		});
        $(this.getDOMNode()).draggable();
		
    },
	render:function(){
		return	(
			<div className="table_frame">
			<div className="table_title"><h4>交易记录</h4></div>
			<table className="table table-bordered table-striped table-condensed table-hover">
				<thead>
					<tr>
						<th>账户</th>
						<th>委托编号</th>
						<th>证券代码</th>
						<th>证券名称</th>
						<th>交易类型</th>
						<th>成交股数</th>
						<th>成交价格</th>
						<th>交易时间</th>
						<th>交易费用</th>
					</tr>
				</thead>
				<tbody>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>

				</tbody>
			</table>
			</div>
			)
			;
	}
});

var InfoStatFrame=React.createClass({
	getInitialState:function(){
		return{
			
		};
	},
	componentDidMount: function(){
		$(this.getDOMNode()).resizable({
      		ghost: true,
			animate: true
		});
        $(this.getDOMNode()).draggable();
		
    },
	render:function(){
		
		return	(
			<div className="table_frame">
			<div className="table_title"><h4>信息统计</h4></div>
			<table className="table table-bordered table-striped table-condensed table-hover">
				<thead>
					<tr>
						<th>账户</th>
						<th>证券代码</th>
						<th>证券名称</th>
						<th>实现利润</th>
						<th>交易笔数</th>
						<th>交易股数</th>
						<th>交易额</th>
						<th>交易费用</th>
					</tr>
				</thead>
				<tbody>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
					<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
				</tbody>
			</table>
			</div>
			)
			;
	}
});
React.render(<FrameBoard></FrameBoard>,
    document.body);