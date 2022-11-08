import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';

export const Dashboard = () => {
  const [user, setUser] = useState({});
  const navigate = useHistory();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const user = localStorage.getItem('user');

    if (user) {
      const _user = JSON.parse(user);
      setUser(_user);
    } else {
      window.location.href = '/login';
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const handleGameClick = () => {
    navigate.push('/games');
  };

  return (
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <div class="app-header header-shadow">
        <div
          class="app-header__logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: 10,
            flexDirection: 'row',
          }}
        >
          <svg
            style={{ width: '15%' }}
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 489.8 489.8"
            version="1.1"
            viewBox="0 0 489.8 489.8"
            xmlSpace="preserve"
          >
            <ellipse cx="337.5" cy="319.388" rx="24.4" ry="36.6"></ellipse>
            <ellipse cx="385.9" cy="202.288" rx="21.7" ry="32.7"></ellipse>
            <path d="M472.6 75.888l-220.8-66.4c-.4-.1-.9-.2-1.3-.3-.4-.1-.9-.2-1.3-.3-2.9-.5-5.8-.5-8.7 0-.4.1-.9.2-1.3.3-.4.1-.9.2-1.3.3l-49.3 14.8-39.8 12-111.5 33.5-20.1 6C7 78.888 0 88.288 0 98.888v291.7c0 10.7 7 20 17.2 23.1l220.7 66.6c2.3.7 4.6 1 7 1 2.3 0 4.7-.3 7-1l220.7-66.4c10.2-3.1 17.2-12.5 17.2-23.1v-291.8c0-10.6-7-20-17.2-23.1zm-402.4 288.7c-11.7 0-21.3-14.3-21.3-31.9s9.5-31.9 21.3-31.9c11.7 0 21.3 14.3 21.3 31.9s-9.6 31.9-21.3 31.9zm50.3-90.9c-12.9 0-23.4-15.8-23.4-35.2s10.5-35.2 23.4-35.2c12.9 0 23.4 15.8 23.4 35.2s-10.4 35.2-23.4 35.2zm57.4-90.2c-13.5 0-24.4-16.4-24.4-36.6s10.9-36.6 24.4-36.6 24.4 16.4 24.4 36.6-10.9 36.6-24.4 36.6zm263.6 189.3l-172.5 51.9v-359.6l172.5 51.9v255.8z"></path>
          </svg>
          <span> Tangi Guru</span>
        </div>
        <div class="app-header__mobile-menu">
          <div>
            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div class="app-header__menu">
          <span>
            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
              <span class="btn-icon-wrapper">
                <i class="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>
        <div class="app-header__content">
          <div class="app-header-right">
            <div class="header-btn-lg pr-0">
              <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left header-user-info" style={{ marginRight: 10 }}>
                    <div class="widget-heading">{user?.fullName}</div>
                    <div class="widget-subheading">
                      <span className="widget-heading">Score:</span> {user?.score}
                    </div>
                  </div>
                  <div class="widget-content-left">
                    <div class="btn-group">
                      <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                        <img width="42" class="rounded-circle" src="https://www.svgrepo.com/show/66303/avatar.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="app-main">
        <div class="app-sidebar sidebar-shadow">
          <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
              <div>
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div class="app-header__menu">
            <span>
              <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                <span class="btn-icon-wrapper">
                  <i class="fa fa-trophy"></i>
                </span>
              </button>
            </span>
          </div>
          <div class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
              <ul class="vertical-nav-menu">
                <li class="app-sidebar__heading">Dashboards</li>
                <li>
                  <a
                    class="mm-active"
                    style={{
                      display: 'flex',
                      columnGap: '15px',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: '27px',
                      cursor: 'pointer',
                    }}
                  >
                    <i class="fa fa-trophy"></i>
                    Kid Analytics
                  </a>
                </li>
                <li class="app-sidebar__heading">Settings</li>
                <li>
                  <a
                    style={{
                      display: 'flex',
                      columnGap: '15px',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: '27px',
                      cursor: 'pointer',
                    }}
                    onClick={handleLogout}
                  >
                    <i class="fa fa-user"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="app-main__outer">
          <div
            class="app-main__inner"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='1080' preserveAspectRatio='none' viewBox='0 0 1440 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1042%26quot%3b)' fill='none'%3e%3cpath d='M1214.61 572.15 a192.77 192.77 0 1 0 385.54 0 a192.77 192.77 0 1 0 -385.54 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M297.245%2c451.367C336.361%2c449.137%2c362.049%2c414.894%2c381.044%2c380.627C399.281%2c347.727%2c412.72%2c309.009%2c394.354%2c276.18C375.66%2c242.765%2c335.53%2c230.264%2c297.245%2c230.836C260.081%2c231.391%2c225.001%2c247.658%2c205.034%2c279.007C183.412%2c312.955%2c176.1%2c355.738%2c195.087%2c391.227C215.066%2c428.571%2c254.962%2c453.777%2c297.245%2c451.367' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M515.8233968552265 272.10779553695403L294.67678155827366 375.2301558249805 618.945757143253 493.25441083390683z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1213.1182648986785 1035.7678407948556L1375.596592289109 889.7518400457806 1195.0416791452933 827.5817977352477z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M711.9860935488977 577.937324541835L718.2701600654261 397.9852041278351 538.3180396514263 391.7011376113066 532.0339731348978 571.6532580253065z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M677.5496278962621 345.12761516708827L980.3703140598413 291.7321578797987 926.9748567725519-11.08852828378059 624.1541706089725 42.30692900350897z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-49.977%2c423.351C-14.419%2c421.291%2c13.709%2c397.837%2c32.774%2c367.751C53.688%2c334.747%2c73.377%2c293.868%2c53.324%2c260.334C33.551%2c227.267%2c-11.449%2c229.409%2c-49.977%2c229.366C-88.618%2c229.323%2c-131.966%2c228.138%2c-153.674%2c260.105C-177.422%2c295.078%2c-173.85%2c342.723%2c-151.183%2c378.406C-129.97%2c411.801%2c-89.474%2c425.639%2c-49.977%2c423.351' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1320.725%2c1234.484C1419.698%2c1228.06%2c1497.844%2c1156.748%2c1543.335%2c1068.615C1584.887%2c988.113%2c1581.372%2c894.204%2c1537.187%2c815.117C1491.793%2c733.865%2c1413.786%2c671.672%2c1320.725%2c670.16C1225.268%2c668.609%2c1143.602%2c727.733%2c1091.723%2c807.877C1033.961%2c897.11%2c991.445%2c1007.519%2c1041.72%2c1101.175C1093.97%2c1198.511%2c1210.484%2c1241.64%2c1320.725%2c1234.484' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M451.96390962424425 841.1314581780691L531.7994554012635 580.0011542251948 270.66915144838924 500.1656084481756 190.83360567136998 761.2959124010499z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1241.0424600981382 1102.8511556119822L1180.4984056545568 876.8976683323206 954.5449183748952 937.441722775902 1015.0889728184766 1163.3952100555637z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M538.8592740651363 1037.5236860278615L561.179113395651 825.1646000776527 231.48056480508058 897.8643840569852z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M275.796%2c259.811C336.372%2c259.93%2c389.869%2c223.613%2c420.418%2c171.304C451.252%2c118.507%2c457.783%2c53.336%2c427.348%2c0.308C396.789%2c-52.936%2c337.165%2c-82.267%2c275.796%2c-80.68C217.081%2c-79.161%2c166.378%2c-43.188%2c137.242%2c7.811C108.354%2c58.376%2c104.101%2c119.705%2c132.159%2c170.735C161.251%2c223.648%2c215.413%2c259.692%2c275.796%2c259.811' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M853.1314811059447 579.9843760116128L843.7262873032952 400.5225874886836 664.264498780366 409.9277812913331 673.6696925830155 589.3895698142622z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M150.0977643646938 380.65175997147264L-103.13933961747023 462.9334828722583-20.85761671668459 716.1705868544223 232.37948726547944 633.8888639536367z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1042'%3e%3crect width='1440' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
            }}
          >
            <div class="app-page-title">
              <div class="page-title-wrapper">
                <div class="page-title-heading">
                  <div class="page-title-icon">
                    <img src="https://www.svgrepo.com/show/24470/home.svg" alt="icon" />
                  </div>
                  <div>
                    Kid's Playground
                    <div class="page-title-subheading">Please replace any text here that describe the web application</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="section_our_solution">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="our_solution_category">
                      <div class="solution_cards_box">
                        <div class="solution_card">
                          <div class="hover_color_bubble"></div>
                          <div class="so_top_icon">
                            <img src="https://i.ibb.co/GHMLfTm/abc-block.png" />
                          </div>
                          <div class="solu_title">
                            <h3>Letter Games</h3>
                          </div>
                          <div class="solu_description">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <button type="button" class="read_more_btn" onClick={handleGameClick}>
                              Play Now
                            </button>
                          </div>
                        </div>
                        <div class="solution_card">
                          <div class="hover_color_bubble"></div>
                          <div class="so_top_icon">
                            <img src="https://i.ibb.co/jRFvjDB/puzzle-pieces.png" alt="color-logo" />
                          </div>
                          <div class="solu_title">
                            <h3>Color Games</h3>
                          </div>
                          <div class="solu_description">
                            <p>
                              It is a long established fact that a reader will be distracted by the readable content of a
                              page when looking at its layout.
                            </p>
                            <button type="button" class="read_more_btn">
                              Play Now
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="solution_cards_box sol_card_top_3">
                        <div class="solution_card">
                          <div class="hover_color_bubble"></div>
                          <div class="so_top_icon">
                            <img src="https://i.ibb.co/vZZgSXN/puzzle.png" alt="color-logo" />
                          </div>
                          <div class="solu_title">
                            <h3>Shape Games</h3>
                          </div>
                          <div class="solu_description">
                            <p>
                              It is a long established fact that a reader will be distracted by the readable content of a
                              page when looking at its layout.
                            </p>
                            <button type="button" class="read_more_btn">
                              Play Now
                            </button>
                          </div>
                        </div>
                        <div class="solution_card">
                          <div class="hover_color_bubble"></div>
                          <div class="so_top_icon">
                            <img src="https://i.ibb.co/b2ZwNvg/numbers.png" alt="number-logo" />
                          </div>
                          <div class="solu_title">
                            <h3>Number Games</h3>
                          </div>
                          <div class="solu_description">
                            <p>
                              It is a long established fact that a reader will be distracted by the readable content of a
                              page when looking at its layout.
                            </p>
                            <button type="button" class="read_more_btn">
                              Play Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
      </div>
    </div>
  );
};
