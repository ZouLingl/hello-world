<template>
  <div class="ag-iframe-portlet">
    <div class="pro-info-nav">
      <button class="go-back fl"><i class="la la-angle-left"></i>返回</button>
      <p class="pro-name">香山游艇码头片区周边截流改造工程<i class="fa fa-question-circle fr"></i></p>
    </div>
    <div class="lifecycle-content">
      <div class="iframe-content">
        <div class="" id="progressQuery">
          <div class="pro-info clearfix">
            <div class="pro-info-item">
              <label>当前办理阶段：</label>
              <label class="">施工许可</label>
            </div>
            <div class="pro-info-item">
              <label>申报方式：</label>
              <span>窗口登记</span>
            </div>
            <div class="pro-info-item">
              <label>状态：</label>
              <span>审批通过</span>
            </div>
            <div class="pro-info-item">
              <label>计时：</label>
              <span>正在计时</span>
            </div>
            <div class="pro-info-item">
              <label>剩余办理时间：</label>
              <span class="">3个工作日</span>
            </div>
            <div class="pro-info-item">
              <label>当前处理步骤：</label>
              <span>办结</span>
            </div>
          </div>
          <div class="pro-stage-info">
            <div class="pro-approved">
              <div class="pro-stage-name">
                <!-- <img src="../images/icon/icon_lifecycle_3.png" alt=""> -->
                <p>项目已办结事项</p>
              </div>
              <div>
                <p class="stage-label">事项</p>
                <p class="stage-num">22</p>
              </div>
              <div>
                <p class="stage-label">历时（工作日）</p>
                <p class="stage-num">25</p>
              </div>
              <div>
                <button class="btn m-btn--pill btn-outline-success">正常审批</button>
                <p class="stage-num">18</p>
              </div>
              <div>
                <button class="btn m-btn--pill btn-outline-danger">逾期审批</button>
                <p class="stage-num">14</p>
              </div>
            </div>
            <div class="approve-together">
              <div class="pro-stage-name">
                <!-- <img src="../images/icon/icon_lifecycle_2.png" alt=""> -->
                <p>并联审批事项</p>
              </div>
              <div>
                <p class="stage-label">事项</p>
                <p class="stage-num">20</p>
              </div>
              <div>
                <p class="stage-label">历时（工作日）</p>
                <p class="stage-num">18</p>
              </div>
            </div>
            <div class="approve-link">
              <div class="pro-stage-name">
                <!-- <img src="../images/icon/icon_lifecycle_1.png" alt=""> -->
                <p>并行推进事项</p>
              </div>
              <div>
                <p class="stage-label">事项</p>
                <p class="stage-num">2</p>
              </div>
              <div>
                <p class="stage-label">历时（工作日）</p>
                <p class="stage-num">7</p>
              </div>
            </div>
          </div>
          <div class="approved-stage-content">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#lifeCycleTable">
                  列表视图
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#lifeCycleCard">
                  卡片视图
                </a>
              </li>
            </ul>
            <div class="pro-stage-color">
              <span class="finished">已办结</span>
              <span class="in-process">办理中</span>
              <span class="hang-up">已挂起</span>
              <span class="reback-file">已退件</span>
              <span class="timeout">已超时</span>
              <span class="">未办理</span>
            </div>
            <div class="tab-content">
              <!--列表视图 start-->
              <div class="tab-pane active" id="lifeCycleTable">
                <!--并联审批事项 start-->
                <div class="info-table">
                  <div class="table-header table-header-yellow">并联审批事项</div>
                  <table class="table table-bordered al">
                      <tbody>
                      <tr>
                        <th colspan="2">阶段</th>
                        <th>审批事项</th>
                        <th width="20%">审批单位</th>
                        <th width="10%">事项开始时间</th>
                        <th width="10%">事项结束时间</th>
                        <th width="10%">审批状态</th>
                        <th width="10%">办结时限</th>
                        <th width="10%">办结用时</th>
                        <th width="8%" class="ac">附件</th>
                      </tr>
                      <tr>
                        <th  class="vertical-th" rowspan="4">
                          立项用地规划许可阶段
                        </th>
                        <th class="vertical-th-small" rowspan="4">
                          牵头部门国土局
                        </th>
                        <td>建设项目用地预审</td>
                        <td>厦门市国土资源与房产管理局</td>
                        <td>2018.11.01  09:00</td>
                        <td>2018.11.05  17:30</td>
                        <td><button class="btn m-btn--pill btn-success btn-stage-size">已办结</button></td>
                        <td>6个工作日</td>
                        <td class="m--font-success">4个工作日</td>
                        <td class="ac">
                          <button class="btn btn-sm btn-outline-success">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>新建选址意见书的核发</td>
                        <td>厦门市规划委员会</td>
                        <td>2018.11.01  09:00</td>
                        <td>2018.11.05  17:30</td>
                        <td><button class="btn m-btn--pill btn-danger btn-stage-size">已超时</button></td>
                        <td>3个工作日</td>
                        <td class="m--font-danger">4个工作日</td>
                        <td class="ac">
                          <button class="btn btn-sm btn-outline-danger">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>政府投资项目可研审批（发改委）</td>
                        <td>厦门市发展和改革委员会</td>
                        <td>2018.11.01  09:00</td>
                        <td>2018.11.05  17:30</td>
                        <td><button class="btn m-btn--pill btn-success btn-stage-size">已办结</button></td>
                        <td>8个工作日</td>
                        <td class="m--font-success">8个工作日</td>
                        <td class="ac">
                          <button class="btn btn-sm btn-outline-success">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>建设用地规划许可证核发</td>
                        <td>厦门市规划委员会</td>
                        <td>2018.11.01  09:00</td>
                        <td>2018.11.05  17:30</td>
                        <td><button class="btn m-btn--pill btn-success btn-stage-size">已办结</button></td>
                        <td>10个工作日</td>
                        <td class="m--font-success">5个工作日</td>
                        <td class="ac">
                          <button class="btn btn-sm btn-outline-success">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                          </button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  <table class="table table-bordered al">
                    <tbody>
                    <tr>
                      <th  class="vertical-th" rowspan="4">
                        工程规划许可阶段
                      </th>
                      <th class="vertical-th-small" rowspan="4">
                        牵头部门国土局
                      </th>
                      <td>建设工程设计方案审查意见书</td>
                      <td width="20%">厦门市规划委员会</td>
                      <td width="10%">2018.11.01  09:00</td>
                      <td width="10%">2018.11.05  17:30</td>
                      <td width="10%"><button class="btn m-btn--pill btn-success btn-stage-size">已办结</button></td>
                      <td width="10%">6个工作日</td>
                      <td width="10%" class="m--font-success">4个工作日</td>
                      <td width="8%" class="ac">
                        <button class="btn btn-sm btn-outline-success">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>建设工程规划许可证（建筑工程）核发</td>
                      <td>厦门市规划委员会</td>
                      <td>2018.11.01  09:00</td>
                      <td>2018.11.05  17:30</td>
                      <td><button class="btn m-btn--pill btn-warning btn-stage-size">已退件</button></td>
                      <td>3个工作日</td>
                      <td></td>
                      <td class="ac">
                        <button class="btn btn-sm btn-outline-warning">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>建设项目的附属绿化工程规划设计方案绿地率审查</td>
                      <td>厦门市发展和改革委员会</td>
                      <td>2018.11.01  09:00</td>
                      <td>2018.11.05  17:30</td>
                      <td><button class="btn m-btn--pill btn-primary btn-stage-size hang-up">挂起中</button></td>
                      <td>8个工作日</td>
                      <td></td>
                      <td class="ac">
                        <button class="btn btn-sm btn-outline-warning">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>城市新建民用建筑修建防空地下室审批</td>
                      <td>厦门市规划委员会</td>
                      <td>2018.11.01  09:00</td>
                      <td>2018.11.05  17:30</td>
                      <td><button class="btn m-btn--pill btn-success btn-stage-size">已办结</button></td>
                      <td>10个工作日</td>
                      <td class="m--font-success">5个工作日</td>
                      <td class="ac">
                        <button class="btn btn-sm btn-outline-success">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <table class="table table-bordered al">
                    <tbody>
                    <tr>
                      <th  class="vertical-th" rowspan="3">
                        施工许可阶段
                      </th>
                      <th class="vertical-th-small" rowspan="3">
                        牵头部门国土局
                      </th>
                      <td>建设工程质量安全监督申报</td>
                      <td width="20%">厦门市规划委员会</td>
                      <td width="10%">2018.11.01  09:00</td>
                      <td width="10%">2018.11.05  17:30</td>
                      <td width="10%"><button class="btn m-btn--pill btn-info btn-stage-size">审批中</button></td>
                      <td width="10%">即办</td>
                      <td width="10%" class="m--font-info">即办</td>
                      <td width="8%" class="ac">
                        <button class="btn btn-sm btn-outline-info">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="m--font-danger">建设工程规划许可证（建筑工程）核发</td>
                      <td class="m--font-danger">厦门市规划委员会</td>
                      <td>2018.11.01  09:00</td>
                      <td>2018.11.05  17:30</td>
                      <td><button class="btn m-btn--pill btn-danger btn-stage-size">已超时</button></td>
                      <td>2个工作日</td>
                      <td class="m--font-danger">3个工作日</td>
                      <td class="ac">
                        <button class="btn btn-sm btn-outline-danger">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>建设项目的附属绿化工程规划设计方案绿地率审查</td>
                      <td>厦门市发展和改革委员会</td>
                      <td></td>
                      <td></td>
                      <td><button class="btn m-btn--pill btn-primary btn-stage-size normal-color">未办理</button></td>
                      <td>2个工作日</td>
                      <td></td>
                      <td class="ac">
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <!--并联审批事项 end-->
                <!--并行推进事项 start-->
                <div class="info-table">
                  <div class="table-header table-header-pup">并行推进事项</div>
                  <table class="table table-bordered al">
                    <tbody>
                    <tr>
                      <th>审批事项</th>
                      <th>审批单位</th>
                      <th width="20%">事项开始时间</th>
                      <th width="10%">事项结束时间</th>
                      <th width="10%">审批状态</th>
                      <th width="10%">办结时限</th>
                      <th width="10%">办结用时</th>
                      <th width="10%" class="ac">附件</th>
                    </tr>
                    <tr>
                      <td>建设工程质量安全监督申报</td>
                      <td>厦门市建设工程质量安全监督站</td>
                      <td>2018.11.16  13:00</td>
                      <td></td>
                      <td><button class="btn m-btn--pill btn-info btn-stage-size">审批中</button></td>
                      <td>即办</td>
                      <td class="m--font-info">即办</td>
                      <td class="ac">
                        <button class="btn btn-sm btn-outline-info">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="m--font-danger">建筑工程施工许可证</td>
                      <td class="m--font-danger">厦门市建设局</td>
                      <td>2018.11.01  09:00</td>
                      <td>2018.11.05  17:30</td>
                      <td><button class="btn m-btn--pill btn-danger btn-stage-size">已超时</button></td>
                      <td class="m--font-danger">3个工作日</td>
                      <td class="m--font-danger">4个工作日</td>
                      <td class="ac">
                        <button class="btn btn-sm btn-outline-danger">
                          <span>
                            <i class="flaticon-tool-1"></i> <span>17</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <!--并行推进事项 end-->
              </div>
              <!--列表视图 end-->
              <!--卡片视图 start-->
              <div class="tab-pane " id="lifeCycleCard" role="tabpanel">
                <div class="table-header table-header-yellow">并联审批事项</div>
                <div class="approved-card-detail">
                  <div class="planning-approval approved-success">
                    <div class="stage-left-icon">
                      <i class="icon_img"></i>
                    </div>
                    <div class="stage-right-content">
                      <div class="pro-stage-header pro-info clearfix">
                        <span class="stage-title m--font-success">立项用地规划许可阶段</span>
                        <div class="pro-info-item">
                          <label>阶段时限：</label>
                          <span>8个工作日（2018-08-27 至 2018-09-05）</span>
                        </div>
                        <div class="pro-info-item">
                          <label>阶段状态：</label>
                          <span class="m--font-success m--font-blod">已办结</span>
                        </div>
                        <div class="pro-info-item">
                          <label>实际用时：</label>
                          <span><b class="warning-red">9</b>个工作日</span>
                        </div>
                        <div class="pro-info-item">
                          <label>逾期事项：</label>
                          <span><b class="warning-red">2</b></span>
                        </div>
                      </div>
                      <div class="card-row">
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        <div class="card-row-item timeout">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="bulid-permit approved-success">
                    <div class="stage-left-icon">
                      <i class="icon_img"></i>
                    </div>
                    <div class="stage-right-content">
                      <div class="pro-stage-header pro-info clearfix">
                        <span class="stage-title m--font-success">工程建设许可阶段</span>
                        <div class="pro-info-item">
                          <label>阶段时限：</label>
                          <span>12个工作日（2018-09-11至 2018-09-26）</span>
                        </div>
                        <div class="pro-info-item">
                          <label>阶段状态：</label>
                          <span class="m--font-success m--font-blod">已办结</span>
                        </div>
                        <div class="pro-info-item">
                          <label>实际用时：</label>
                          <span><b>10</b>个工作日</span>
                        </div>
                        <div class="pro-info-item">
                          <label>退件事项：</label>
                          <span><b class="warning-red">1</b></span>
                        </div>
                        <div class="pro-info-item">
                          <label>挂起事项：</label>
                          <span><b class="warning-red">1</b></span>
                        </div>
                      </div>
                      <div class="card-row">
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">国有建设用地使用权登记（首次登记）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">国有建设用地使用权登记（首次登记）</span>
                          <span class="approve-time">2018.11.15 - 2018.11.16（已退件）</span>
                        </div>
                        <div class="card-row-item hang-up">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">建设工程规划条件核实合格证核发</span>
                          <span class="approve-time">2018.11.17 - 2018.11.21(已挂起)</span>
                        </div>
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        <div class="card-row-item finished">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="work-permit pro-approving">
                    <div class="stage-left-icon">
                      <i class="icon_img"></i>
                    </div>
                    <div class="stage-right-content">
                      <div class="pro-stage-header pro-info clearfix">
                        <span class="stage-title m--font-info">施工许可阶段</span>
                        <div class="pro-info-item">
                          <label>阶段时限：</label>
                          <span>15个工作日（2018-08-27 至 2018-09-05）</span>
                        </div>
                        <div class="pro-info-item">
                          <label>阶段状态：</label>
                          <span class="m--font-info m--font-blod">办理中</span>
                        </div>
                        <div class="pro-info-item">
                          <label>目前用时：</label>
                          <span><b class="warning-red">9</b>个工作日</span>
                        </div>
                      </div>
                      <div class="card-row">
                        <div class="card-row-item in-process">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">2018.11.03 - 2018.11.03</span>
                        </div>
                        <div class="card-row-item">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">未办理</span>
                        </div>
                        <div class="card-row-item">
                          <span class="approver-name">东莞市发展和改革局 </span>
                          <span class="approve-file">政府投资项目审批（项目建议书）</span>
                          <span class="approve-time">未办理</span>
                        </div>
  
                      </div>
                    </div>
                  </div>
                  <div class="end-stage not-begin">
                    <div class="stage-left-icon"><i class="icon_img"></i></div>
                    <div class="stage-right-content">
                      <div class="pro-stage-header pro-info clearfix">
                        <span class="stage-title">竣工验收</span>
                        <div class="pro-info-item">
                          <label>牵头部门：</label>
                          <span>建设局  </span>
                        </div>
                        <div class="pro-info-item">
                          <label>阶段状态：</label>
                          <span class="m--font-blod not-begin-color">未申报</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="table-header table-header-pup">并行推进事项</div>
                <div class="row-stage-cycle">
                  <div class="circle-line circle-line-start">
                    <span class="circle"></span>
                  </div>
                  <div class="circle-line circle-stage-1">
                    <span class="circle"></span>
                    <span class="line"></span>
                    <div class="line-title">
                      <p>规划设计方案联合审定</p>
                      <p class="line-time">2018.11.15</p>
                    </div>
                  </div>
                  <div class="circle-line circle-stage-2">
                    <span class="circle"></span>
                    <span class="line"></span>
                    <div class="line-title">
                      <p>建委联合审图</p>
                      <p class="line-time">2018.11.15</p>
                    </div>
                  </div>
                  <div class="circle-line circle-line-end">
                    <span class="circle"></span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
              <!--卡片视图 end-->
            </div>
          </div>
          
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="css" scoped>
  @import '~/assets/css/pro-lifecycle.css';
</style>
