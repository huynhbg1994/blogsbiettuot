<script type='text/javascript'>
//<![CDATA[
jQuery.cookie=function(key,value,options){if(arguments.length>1&&String(value)!=="[object Object]"){options=jQuery.extend({},options);if(value===null||value===undefined){options.expires=-1;}
if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}
value=String(value);return(document.cookie=[encodeURIComponent(key),'=',options.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
options=value||{};var result,decode=options.raw?function(s){return s;}:decodeURIComponent;return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?decode(result[1]):null;};
//]]>
</script>
<script type='text/javascript'>
jQuery(document).ready(function($){if($.cookie('popup_facebook_box')!='yes'){$('#sub-box').delay(2500).fadeIn('fast');$('#closebox, #boxclose').click(function(){$('#sub-box').stop().fadeOut('fast');});}});
</script>
<div id='sub-box'>
<div id='boxclose'>
</div>
<div id='boxview'>
<div id='closebox'>
</div>
<div id='subscribe-box'>
<center><p><i class='fa fa-envelope-o'></i> ĐĂNG KÝ NHẬN TIN QUA EMAIL</p></center>
<div class='emailfield'>
<form action='http://feedburner.google.com/fb/a/mailverify?uri=1acj9noatalupv2tsmu9d9k9oo' method='post' onsubmit='window.open(&#39;http://feedburner.google.com/fb/a/mailverify?uri=1acj9noatalupv2tsmu9d9k9oo, &#39;popupwindow&#39;, &#39;scrollbars=yes,width=550,height=520&#39;);return true' target='popupwindow'>
<input name='name' onblur='if (this.value == "") {this.value = "Your Name";}' onfocus='if (this.value == "Your Name") {this.value = "";}' type='text' value='Your Name'/>
<input name='email' onblur='if (this.value == "") {this.value = "Your Email";}' onfocus='if (this.value == "Your Email") {this.value = "";}' type='text' value='Your Email'/>
<input name='uri' type='hidden' value='1acj9noatalupv2tsmu9d9k9oo'/>
<input name='loc' type='hidden' value='en_US'/>
<input class='submitbutton' type='submit' value='Subscribe Now'/>
</form>
</div></div>
</div>
</div>
