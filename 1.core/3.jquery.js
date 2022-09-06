//파라미터에 css형태로 넣기
//3개이상 page?에서 쓰는 fn이면, 3개의 js를?만들고 script하기?
$('#myId') // <div id='myId'></div>

// 과제: class myClass DOM들을 찾아라.
$('.myClass')

// 과제: name attribute value 가 surname 인 input DOM들을 찾아라.
$('input[name="surname"]') // <input name='surname'/>

$('#contents ul.people li') 
// jquery가 원하는건 li
// collection에 있는 li는 2개

// 과제: HTML code로 작성
/*
<div id='contents'>
    <ul class='people'>
        <li></li>
        <li></li>
    </ul>
</div>
*/

$('a.external:first') // 가장먼저 정의된 a.external
$('a.external:last')  // 마지막에 정의된 a.external
/*
<a class='external'></a> 얘
<a class='external'></a>
*/

$('tr:odd') // odd - 홀수번째, 행번호(index)는 0번 부터 시작
/**
 * <tr/> < 0
 * <tr/> < 1 얘
 * <tr/> < 2
 * <tr/> < 3 얘
 */
$('tr:even') // even - 짝수번째
$('li:odd, li:even')

$('div:visible') // 보이는 것만

$('div:gt(1)') // index-1 보다 크다 
/**
 * <div></div> <0
 * <div></div> <1
 * <div></div> <2 얘
 */

$('div:animated') // 모든 현재 애니메이션되는 div들을 선택

$('a[rel$="thinger"]') // thinger로 끝나는걸 찾겠다
/**
 * <a rel='do-nothinger'></a>
 * <a rel='so-thinger'></a>
 */

$("E[A^=V")  //^ 시작되는
$("E[A*=V")  //* 포함하는
$("E[A$=V")  //$ 끝나는

$('div.foo').has('p') // <p> 태그를 포함하는 "div.foo" (자식으로 갖고있는)
/**
 * <div class='foo'> 얘
 *     <p></p> 
 * </div>
 * 
 * <div class='foo'>
 * </div>
 */

$('ul li').filter('.current') // current class를 가지는 ul의 li (속성으로 갖고있는)
/*
<ul>
    <li class='current></li> 얘 ---- $('ul li').eq(0)
    <li></li> ---- $('ul li).eq(1)
</ul>
*/

$('ul li').not('.current') // current class를 가지지 않는 ul li

$('ul li').eq(1) // 2번째 아이템을 return함(collection을 리턴)
//collection: 집합, 원소가 n개가 있다.



//form - 회원가입등 작업할 때 쓰래


$('form :button')
/*
<form>
    <button></button> 버튼타입을 나타내는 신문법
    <input type='button'> 구문법
</form>
*/

$('form :radio') // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>>

$('form :checked')
/* 얘네들중에 checked 된 애들만 골라냄
<input type='radio'/>
<input type='checkbox/>
<select><option></option></select>

<select></select>만 체크된게 필요하면, $('form :selected)를 사용해야함
*/

$('form :selected')
/*
<select><option></option></select>
*/

$('form :enabled')
$('form :disabled')

$('form :file') // <input type='file'/>

$('form :input')
/*
<input type='text'/>
<input type='textarea/> - 여러줄입력
<select></select>
<button type='button'></button>
<button type='reset'></button>
<button type='submit'></button>
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio') 
// 자식이 아닌 나의 radoi이기에 'form space :' 안해주고 바로 'form:' 해줌

// 과제: 위 selector 에 해당하는 HTML code를 작성하라
// <intput type='radio' name='gender'/>

$('form :reset') // <input type='reset'/>

$('form :submit') // <input type='submit'/>