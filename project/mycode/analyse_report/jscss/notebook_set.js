//<script src='jscss/notebook_set.js'></script>

function sleep(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime)
    return;
      }
}

function downs(content, filename) {    // 创建隐藏的可***链接
   var eleLink = document.createElement('a');
   eleLink.download = filename;
   eleLink.style.display = 'none';    // 字符内容转变成blob地址
   var blob = new Blob([content]);
   eleLink.href = URL.createObjectURL(blob);    // 触发点击
   document.body.appendChild(eleLink);
   eleLink.click();    // 然后移除
   document.body.removeChild(eleLink);
};



function code_show(){
    var evevs = document.getElementsByClassName('input');
    for(i=0;i<evevs.length;i++){ 
      evevs[i].style.display = 'block'
    }

  }


  function code_noshow(){
    var evevs = document.getElementsByClassName('input');
    for(i=0;i<evevs.length;i++){ 
      evevs[i].style.display = 'None'
    }

  }

  function menu_show(){
    var evevs = document.getElementsByClassName('input');
    for(i=0;i<evevs.length;i++){ 
      evevs[i].style.display = 'block'
    }

  }
  function menu_noshow(){
    var evevs = document.getElementsByClassName('input');
    for(i=0;i<evevs.length;i++){ 
      evevs[i].style.display = 'None'
    }

  }


  function show_menu_button(){
    document.getElementsByClassName('ui-resizable-handle ui-resizable-e ui-icon ui-icon-grip-dotted-vertical')[0].style.backgroundColor='#00FFFF'
  }


function output_show(){
    var evevs = document.getElementsByClassName('output');
    for(i=0;i<evevs.length;i++){ 
      evevs[i].style.display = 'block'
    }

  }
  function output_noshow(){
    var evevs = document.getElementsByClassName('output');
    for(i=0;i<evevs.length;i++){ 
      evevs[i].style.display = 'None'
    }

  }
  function show_menu_button(){
    document.getElementsByClassName('ui-resizable-handle ui-resizable-e ui-icon ui-icon-grip-dotted-vertical')[0].style.backgroundColor='#00FFFF'
  }
  function yemian(){
    code_noshow();p_style_set();p_style_set1()
  }
  function code_on_off(){
    var evevs = document.getElementsByClassName('input');
    if (evevs[0].style.display=='none'){code_show()}
    else(code_noshow());
        
  }
   function output_on_off(){
    var evevs = document.getElementsByClassName('output');
    if (evevs[0].style.display=='none'){output_show()}
    else(output_noshow());
        
  }

  function p_style_set() {
    var evevs = document.getElementsByTagName('p');
    for(i=0;i<evevs.length;i++){ 
      evevs[i].style.color = 'white';
      evevs[i].style.fontsize=15;
    }
  }
  function p_style_set1() {
    var evevs = document.getElementsByClassName('output_subarea output_stream output_stdout output_text');
    for(i=0;i<evevs.length;i++){ 
      evevs[i].getElementsByTagName('pre')[0].style.color = '#DBDBDB';
      evevs[i].getElementsByTagName('pre')[0].style.fontsize=15;
    }
  }

function times(){         //一进该页面就加载以下方法
                               //显示右下角日期的方法
    setInterval('countDown()',1000);    //一般秒设置为参数为1000
    }
      var sec = 60*5;                  //设置倒计时时间为30秒
      function countDown() {        //倒计时的方法
        if(sec >0) {sec--;
          document.getElementsByClassName('header')[0].innerHTML= '<h3>'+'目录'+'</h3>';
        } 
        if(sec <120) {sec--;
          document.getElementsByClassName('header')[0].innerHTML= '<h3>'+sec.toString()+'</h3>';
        } 
        if (sec<60) { 
          document.getElementsByClassName('header')[0].style.color='red';


          //location = "";  //倒计时为0进入的页面
                                       }
        else{}
      }



    function menu_on_off(){
    var evevs = document.getElementById('toc-wrapper');
    if (evevs.style.display=='none'){
      document.getElementById('toc-wrapper').style.display='block';
    document.getElementById('toc-wrapper').style.width='15%';
    document.getElementById('notebook-container').style.width='85%';
    document.getElementById('notebook-container').style.margin='0cm 0cm 0cm 15%'}
     else if (evevs.style.display=='block'){
      document.getElementById('toc-wrapper').style.display='none';
      document.getElementById('toc-wrapper').style.width='15%';
    document.getElementById('notebook-container').style.width='100%'
    document.getElementById('notebook-container').style.margin='0cm 0cm 0cm 0%'
    }
    else if (evevs.style.display==''){
      document.getElementById('toc-wrapper').style.display='none';
      document.getElementById('toc-wrapper').style.width='15%';
    document.getElementById('notebook-container').style.width='100%';
    document.getElementById('notebook-container').style.margin='0cm 0cm 0cm 0%'
      
    }
    
        }
 


window.onload=function(){yemian();alert('按H显示帮助\n按C隐藏显示代码\n按M隐藏目录\n按T计时');}

document.onkeyup = function (event) {
           var first = 0
            var e = event || window.event;
            var keyCode = e.keyCode || e.which;
            switch (keyCode) {
                case 32:
                    notif();
                    break;
                case 84:
                    times();
                    break;
                case 67:
                    code_on_off();
                    
                    break;
                case 39:
                    output_on_off();
                    break;
                case 83:
                 
                downs(document.documentElement.outerHTML,'now.html');

                  break;
                case 72:
                alert('按H显示帮助\n按C隐藏显示代码\n按M隐藏目录\n按T计时');
                break
                case 77:
                menu_on_off();
                break
                default:
                    break
                    //alert(keyCode);
            }
        }