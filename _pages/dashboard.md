---

layout: dashboard
title: Dashboard
permalink: /dashboard
navigation_weight: 2
---

<header class="navbar clearfix" id="header">
  <div class="container">
    <div class="navbar-brand">
      <a href="../">
        <label style="margin-left:10px; color:white; cursor: pointer">D-MON</label>
      </a>
    </div>
    <!-- NAVBAR RIGHT -->
    <ul class="nav navbar-nav pull-right" style="min-width: 10px; margin-top: 6px;">
      <li class="dropdown user">
        <a class="dropdown-toggle" href="../">
          <span class="username">
            <i class="fa fa-cloud"></i> Project Page
          </span>
        </a>
      </li>
      <li class="dropdown user">
        <a class="dropdown-toggle" href="https://github.com/Zyten/dmon-web" target="_blank">
          <span class="username">
            <i class="fa fa-github"></i> Fork me on GitHub
          </span>
        </a>
      </li>
    </ul>
    <!-- /NAVBAR RIGHT -->
  </div>
</header>

<section id="page">
  <div id="sidebar" class="sidebar mini-menu">
    <div class="sidebar-menu nav-collapse">
      <div class="divide-20"></div>
      <ul style="margin-top: 34px;">
        <li class="active">
          <a href="../dashboard">
            <i class="fa fa-map-marker fa-fw"></i> <span class="menu-text">UTHM</span>
            <span class="selected"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div id="main-content" class="margin-left-50">
    <div class="container">
      <div class="row">
        <div id="content" class="col-lg-12">
          <!-- PAGE HEADER-->
          <div class="row">
            <div class="col-sm-12">
              <div class="page-header">
                <!-- BREADCRUMBS -->
                <ul class="breadcrumb">
                  <li>
                    <i class="fa fa-home"></i>
                    <a href="../">Home</a>
                  </li>
                  <li><i class="fa fa-map-marker"></i> UTHM</li>
                </ul>
                <!-- /BREADCRUMBS -->
                <div class="clearfix">
                  <h3 class="content-title pull-left">UTHM</h3>
                </div>
                <div class="description">Actual Report, Historical Data and more</div>
              </div>
            </div>
          </div>
          <!-- /PAGE HEADER -->
          <!-- DASHBOARD CONTENT -->
          <div class="row">
            <!-- API GAUGE -->
            <div class="col-md-6">
              <div class="box border orange">
                <div class="box-title">
                  <h4><i class="fa fa-map-marker"></i>Air Pollution Index</h4>
                  <div class="tools">
                    <a href="javascript:;" class="reload">
                      <i class="fa fa-refresh"></i>
                    </a>
                    <a href="javascript:;" class="collapse">
                      <i class="fa fa-chevron-up"></i>
                    </a>
                    <a href="javascript:;" class="remove">
                      <i class="fa fa-times"></i>
                    </a>
                  </div>
                </div>
                <div class="row box-body" style="margin-right:0px; height: 250px;">
                  <div class="col-md-6" style="height: 240px;">
                    <div id='chart_div'> 
                      <img class="center-block" alt="Ajax loader" src="http://thingspeak.com/assets/loader-transparent.gif" style="position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0;" />
                    </div>
                  </div>
                  <div class="col-md-5" style=" height: 240px;">
                    <img style="width: 180px; height: 200px; margin-top:15px; margin-left:15px; float: left;" src="img/apicolorref.png" />
                  </div>
                </div>
              </div>
            </div>
            <!-- /API GAUGE -->
            <!-- SENSOR READINGS -->
            <div class="col-md-6">
              <div class="box solid grey">
                <div class="box-title">
                  <h4><i class="fa fa-bell"></i>Sensor Values </h4>
                  <div class="tools hidden-xs">
                    <span class="badge badge-green" id="last_update"></span>&nbsp;&nbsp;&nbsp;
                    <a href="javascript:;" class="collapse">
                      <i class="fa fa-chevron-up"></i>
                    </a>
                    <a href="javascript:;" class="remove">
                      <i class="fa fa-times"></i>
                    </a>
                  </div>
                </div>
                <div class="box-body"  style="height: 250px;">
                  <div style="height: 280px;">
                    <div class="box-body font-400" style="padding-top: 0px;">
                      <h2><i class="wi wi-thermometer"></i> Temperature: <div id="nowTemp" style="text-align: left; width: 170px; height: 40px; float: right; background: url(img/loaders/ajax-loader.gif) no-repeat 80% 50%; "></div></h2>
                      <h2><i class="wi wi-humidity"></i> Humidity: <div id="nowHumidity" style="text-align: left; width: 170px; height: 40px; float: right; background: url(img/loaders/ajax-loader.gif) no-repeat 80% 50%; "></div></h2>
                      <h2><i class="wi wi-dust"></i> Dust Density: <div id="nowDust" style="text-align: left; width: 170px; height: 40px; float: right; background: url(img/loaders/ajax-loader.gif) no-repeat 80% 50%; "></div></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /SENSOR READINGS -->
            <!-- 24H DUST DENSITY CHART -->
            <div class="col-md-12">
              <div class="box border inverse">
                <div class="box-title">
                  <h4><i class="wi wi-dust"></i>24H Dust Density Report</h4>
                  <div class="tools">
                    <a href="javascript:;" class="collapse">
                      <i class="fa fa-chevron-up"></i>
                    </a>
                    <a href="javascript:;" class="remove">
                      <i class="fa fa-times"></i>
                    </a>
                  </div>
                </div>
                <div id="chart-container3">
                  <img alt="Ajax loader" src="http://thingspeak.com/assets/loader-transparent.gif" style="position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0;" />
                </div>
              </div>
            </div>
            <!-- /24H DUST DENSITY CHART -->
            <!-- 24H TEMPERATURE CHART -->
            <div class="col-md-6">
              <div class="box border inverse">
                <div class="box-title">
                  <h4><i class="wi wi-thermometer"></i>24H Temperature Report</h4>
                  <div class="tools">
                    <a href="javascript:;" class="collapse">
                      <i class="fa fa-chevron-up"></i>
                    </a>
                    <a href="javascript:;" class="remove">
                      <i class="fa fa-times"></i>
                    </a>
                  </div>
                </div>
                <div id="chart-container1">
                  <img alt="Ajax loader" src="http://thingspeak.com/assets/loader-transparent.gif" style="position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0;" />
                </div>
              </div>
            </div>
            <!-- /24H TEMPERATURE CHART -->
            <!-- 24H HUMIDITY CHART -->
            <div class="col-md-6">
              <div class="box border inverse">
                <div class="box-title">
                  <h4><i class="wi wi-humidity"></i>24H Humidity Report</h4>
                  <div class="tools">
                    <a href="javascript:;" class="collapse">
                      <i class="fa fa-chevron-up"></i>
                    </a>
                    <a href="javascript:;" class="remove">
                      <i class="fa fa-times"></i>
                    </a>
                  </div>
                </div>
                <div id="chart-container2">
                  <img alt="Ajax loader" src="http://thingspeak.com/assets/loader-transparent.gif" style="position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0;" />
                </div>
              </div>
            </div>
            <!-- /24H HUMIDITY CHART -->
          </div>
          <!-- END DASHBOARD -->
          <div class="footer-tools">
            <span class="go-top">
              <i class="fa fa-chevron-up"></i> Top
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>