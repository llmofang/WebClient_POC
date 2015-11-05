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
	render:function(){
		return	(
			<div className="table_frame">
			<h5>委托</h5>
			<table className="table table-bordered">
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
			</table>
			</div>
			)
			;
	}
});

var PositionFrame=React.createClass({
	render:function(){
		return	(
			<div className="table_frame">
			<h5>仓位</h5>
			<table className="table table-bordered">
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
			</table>
			</div>
			)
			;
	}
});

var LogFrame=React.createClass({
	render:function(){
		return	(
			<div className="table_frame">
			<h5>交易记录</h5>
			<table className="table table-bordered">
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
			</table>
			</div>
			)
			;
	}
});

var InfoStatFrame=React.createClass({
	render:function(){
		return	(
			<div className="table_frame">
			<h5>信息统计</h5>
			<table className="table table-bordered">
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
			</table>
			</div>
			)
			;
	}
});
React.render(<FrameBoard></FrameBoard>,
    document.body);