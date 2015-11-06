var FrameBoard=React.createClass({
	render:function(){
		return (
			<div className="position_div">
				<EntrustFrame ></EntrustFrame>
				<PositionFrame ></PositionFrame>
				<LogFrame ></LogFrame>
				<InfoStatFrame></InfoStatFrame>
			</div>
		)
	}
	
})

var EntrustFrame=React.createClass({
	getInitialState:function(){
		return{
			
		};
	},
	render:function(){
		return	(
			<div className="table_frame">
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