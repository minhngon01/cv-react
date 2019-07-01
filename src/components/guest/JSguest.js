import React, {Component} from 'react';
import '../../styles/js_exercise.css';
import Exercise from '../Exercise';

import Header from '../layout/Header';
class JSguest extends Component {

	q2_SeeAndSay(input) {
	    var num = input;
	    num.toString();
	    let len = num.length;
	    let result = '';
	    let count = 1;

	    for(var i=0; i<len; i++){
	      let current = num[i];
	      if(current === num[i+1]) {
	        count++;
	      } else {
	        result += count + current;
	        count = 1;
	      }
	    }
	    return result;
	}


	q4_thuannghich(input){
	    var str = input;
	    var newNum, a = [], count = 0;
	    for (var i=0; i < str.length; i++){
	        if (str[i].toUpperCase() === "A" || str[i].toUpperCase()=== "B" || str[i].toUpperCase()=== "C") newNum = 2;
	        else if (str[i].toUpperCase() === "D" || str[i].toUpperCase()=== "E" || str[i].toUpperCase() === "F") newNum = 3;
	        else if (str[i].toUpperCase() === "G" || str[i].toUpperCase() === "H" || str[i].toUpperCase() === "I") newNum = 4;
	        else if (str[i].toUpperCase() === "J" || str[i].toUpperCase() === "K" || str[i].toUpperCase() === "L") newNum = 5;
	        else if (str[i].toUpperCase() === "M" || str[i].toUpperCase() === "N" || str[i].toUpperCase() === "O") newNum = 6;
	        else if (str[i].toUpperCase() === "P" || str[i].toUpperCase() === "Q" || str[i].toUpperCase() === "R" || str[i].toUpperCase() === "S") newNum = 7;
	        else if (str[i].toUpperCase() === "T" || str[i].toUpperCase() === "U" || str[i].toUpperCase() === "V") newNum = 8;
	        else if (str[i].toUpperCase() === "W" || str[i].toUpperCase() === "X" || str[i].toUpperCase() === "Y" || str[i].toUpperCase() === "Z") newNum = 9;
	        a[i] = newNum;
    	}
	    var k = a.length;
	    for (i = 0; i < k/2 ; i++){
	        if (a[i] === a[k-i-1])
	            count++;
	        else
	            count -= 100;
	    }

	    if (count === Math.floor(k/2) || count === Math.floor(k/2) + 1) return "YES" ;
	    else return "NO";
	}


	q6_TeosCandy(input){
	    var array = input.split(" ");
	    var numPeople = array[0];
	    var remainCandy = array[1];
	    if (remainCandy % (numPeople-1) === 0)
	        return ((numPeople*(remainCandy/(numPeople-1))-1) + " " + ((numPeople*(remainCandy/(numPeople-1)))))
	    else
	    	console.log(remainCandy/(numPeople-1))
	    	console.log(numPeople)
	        return Math.floor( parseInt(remainCandy) + parseInt((remainCandy/(numPeople-1)) )) + " " + Math.floor(parseInt(remainCandy) + parseInt((remainCandy/(numPeople-1))))
	}


	q8_CountCow(input){
	    var num = input;
	    var str = "moo", i = 3;
	    while (str.length < num){
	        var middle = "m"
	        middle = middle + "o".repeat(i);
	        str = str + middle + str;
	        i++;
	    }
	    return str[num-1];
	}


	q10_UrsaDota(input){
	    var hp = input;
	    let damage = 0, count=1;
	    while(damage < hp){
	        damage = count*(count+1)/2;
	        count++;
	    }
	    return count -1;
	}

	render(){
		const ex2 =
		<div>
			      	<p>Phép biến đổi "nhìn và đọc" được định nghĩa như sau:</p>
			      	<p>Bắt đầu từ số ở đầu tiên X. Với các số giống nhau thì nhóm lại thành một dãy (giả sử có Y số) thì dãy này được chuyển thành YX.</p>
			      	<p> Ví dụ 122344111 đọc là "một 1, hai 2, một 3, hai 4, ba 1", do đó chuỗi 122344111 chuyển thành
					1122132431.</p>
			      	<p>Input</p>
			      	<p class="indent-text">Dòng đầu chứa số bộ test:</p>
			      	<p className="indent-text">Mỗi dòng sau chứa 1 bộ test chứa chuỗi cần biến đổi (không quá 1000 chữ số)</p>
			      	<p>Output</p>
			      	<p className="indent-text">Với mỗi bộ test, in ra kết quả phép biến đổi</p>
			      	<p>VD:</p>
			      	<table className="table-io">
						  <tr>
						    <th>Input</th>
						    <th>Output</th>

						  </tr>
						  <tr>
						    <td>122344111</td>
						    <td>1122132431</td>
						  </tr>
						  <tr>
						    <td>1111111111</td>
						    <td>101</td>
						  </tr>
						  <tr>
						  	<td>12345</td>
						    <td>1112131415</td>
						  </tr>
					</table>
		</div>

		const ex4 =
		<div>
			      	<p>Ngày nay, việc sử dụng bàn phím điện thoại di động để nhấn các số đã trở thành một việc rất quen thuộc với các bạn sinh viên. Ai cũng biết các phím số trên điện thoại cũng là các phím dùng để nhấn các chữ cái:</p>
			      	<p className = "indent-text">2: ABC, 3: DEF, 4: GHI, 5: JKL, 6: MNO, 7: PQRS, 8: TUV, 9: WXYZ</p>
			      	<p>Nam viết ra giấy một dãy ký tự và đố Bình xác định đó là dãy số nào theo cách nhấn số trên điện thoại (chỉxem xét sự tương ứng giữa số và ký tự chứ không xem xét phải nhấn bao nhiêu lần phím đó, ví dụ cả A, B, C đều là một số 2).</p>
			      	<p> Bình rất nhanh chóng xác định được kết quả, không những thế Bình còn muốn xác định nhanh xem số đócó phải là số dạng thuận nghịch hay không. Một số là thuận nghịch nếu viết theo thứ tự ngược lại cũng là chính nó. Hãy viết chương trình giúp Bình thực hiện công việc trên.</p>
			      	<p>Input</p>
			      	<p className="indent-text">Dòng đầu tiên chứa số n là số bộ test (không quá 1000).</p>
			      	<p className="indent-text">Mỗi bộ test viết trên một dòng một dãy ký tự gồm các chữ cái có thể là chữ hoa hoặc chữ thường, dài không quá 20 ký tự, không có khoảng trống.)</p>
			      	<p>Output</p>
			      	<p className="indent-text">Với mỗi bộ test, in ra màn hình, trên một dòng, chữ “YES” nếu đó tương ứng là số thuận nghịch, chữ “NO” nếu ngược lại.i</p>
			      	<p>VD:</p>
			      	<table className="table-io">
						  <tr>
						    <th>Input</th>
						    <th>Output</th>

						  </tr>
						  <tr>
						    <td>ANBOBNA</td>
						    <td>YES</td>
						  </tr>
						  <tr>
						    <td>iAmACoolCompany</td>
						    <td>NO</td>
						  </tr>
					</table>
		</div>

		const ex6 =
		<div>
			      	<p>Đi chợ về, mẹ mua một gói kẹo cho anh em Tèo. Mẹ bảo Tèo rằng đợi các em đi học về thì hãy chia, nhưng Tèo không nghe, cứ đòi ăn trước. Tèo chia đều kẹo cho tất cả anh em, nếu như chia không đều thì các phần nhiều hơn (nhiều hơn các phần còn lại 1 cái) sẽ dành cho những đứa bé hơn.</p>
			      	<p>Là anh cả nên Tèo chỉ lấy phần nhỏ nhất.Khi lũ trẻ đi học về, chúng nhận phần của mình, nhưng nghi ngờ anh Tèo là người lấy phần nhiều nhất, vì vậy chúng đem đi hỏi mẹ xem gói kẹo ban đầu có tất cả bao nhiêu cái?</p>
			      	<p> Các bạn hãy tính toán xem số lượng kẹo có thể có ban đầu nhỏ nhất và lớn nhất là bao nhiêu?</p>
			      	<p>Input</p>
			      	<p className="indent-text">Gồm 2 số nguyên n (2 {"<="} n {"<="} 15) và k (n {"<="} k {"<="} 100) lần lượt là những đứa trẻ trong gia đình của Tèo và số kẹo còn lại sau khi Tèo đã ăn hết phần của mình.</p>
			      	<p>Output</p>
			      	<p className="indent-text">In ra 2 giá trị số kẹo nhỏ nhất và lớn nhất có thể có ban đầu.</p>
			      	<p>VD:</p>
			      	<table className = "table-io">
						  <tr>
						    <th>Input</th>
						    <th>Output</th>

						  </tr>
						  <tr>
						    <td>2 5</td>
						    <td>9 10</td>
						  </tr>
						  <tr>
						    <td>3 5</td>
						    <td>7 7</td>
						  </tr>
					</table>
		</div>

		const ex8 =
		<div>
			      		<p>Những con bò đang chuẩn bị bắt đầu chơi trò “Moo”. Chúng đứng trên một hàng dài, trong đó mỗi con bò trong
							hàng sẽ nói một chữ cái nhanh nhất có thể. Con bò nào phạm luật đầu tiên thì sẽ thua.</p>
						<p>Dãy các kí tự “Moo” có thể kéo dài liên tục và không giới hạn. Chúng sẽ bắt đầu như sau:</p>
						<p className="indent-text"> m o o m o o o m o o m o o o o m o o m o o o m o o m o o o o</p>
						<p>Dãy kí tự được diễn tả như sau: Gọi S(0)là một trong ba kí tự “m o o”. Sau đó dãy kí tự S(k)sẽ bằng dãy S(k-1)
							và thêm vào “m o ... o” với k+2 chữ o, và sau đó cộng thêm một lần cho S(k-1). Ví dụ:</p>
						<p className="indent-text">S(0) = "m o o"</p>
						<p className="indent-text">S(1) = "m o o m o o o m o o"</p>
						<p className="indent-text">S(2) = "m o o m o o o m o o m o o o o m o o m o o o m o o"</p>
						<p>Với cách này sẽ tạo được dãy kí tự rất dài, và dãy này sẽ dùng cho game Moo.</p>
						<p>Cô bò Bessie muốn biết kí tự thứ N của dãy này là chữ “m” hay chữ “o”. Bạn hãy giúp Bessie nhé!</p>
						<p>Input </p>
						<p className="indent-text">*Dòng 1: Gồm một số nguyên N(1 {"<="} N {"<="} 10^9).</p>
						<p className="indent-text"> Dòng duy nhất chứa kí tự “m” hoặc “o”</p>

						<p>Output </p>
						<p class="indent-text"> Với mỗi bộ test ghi trên một dòng số thứ tự bộ test, một dấu cách rồi đến xâu T.</p>
						<p>VD:</p>
						<table className = "table-io">
						  <tr>
						    <th>Input</th>
						    <th>Output</th>

						  </tr>
						  <tr>
						    <td>11</td>
						    <td>3</td>
						  </tr>
						</table>
		</div>

		const ex10 =
		<div>
			      		<p>Ursa là một hero rất bá đạo trong DotA, anh có kỹ năng gia tăng sức mạnh sau mỗi cú đánh theo công thức:</p>
						<p className="indent-text">D[i] = D[i-1] + i với i là số thứ tự cú đánh và D i là lượng sát thương gây ra sau cú đánh đó, với i = 1 thì D[i] = 1.</p>
						<p>Thanh mới tập chơi DotA và chơi một hero có lượng máu cơ bản là X. Hero của Thanh không chịu được
							đòn đánh có sát thương lớn hơn X. </p>
							<p>Bạn hãy giúp Thanh tính xem có thể chịu được tối đa bao nhiêu cú đánh
							của Ursa.</p>
						<p>Input </p>
						<p className="indent-text"> Dòng duy nhất chứa số X (1 {'<='} X {'<='} 10000).</p>

						<p>Output </p>
						<p className="indent-text"> In ra số cú đánh tối đa mà hero của Thanh có thể chịu được.</p>
						<p>VD:</p>
						<table className = "table-io">
						  <tr>
						    <th>Input</th>
						    <th>Output</th>

						  </tr>
						  <tr>
						    <td>1</td>
							<td>1</td>
						  </tr>

						</table>
		</div>

		return(
		<div className="">
			<Header name="guest"/>
      <h1/>
	  	<div>
				    <h1 className="myname"> <i>ĐẶNG MINH NGÔN</i>	</h1>
			</div>

			<div className="row exercise">

		 		<Exercise questionName = "Bài 2: Nhìn và đọc" DeBai = {ex2} passedFunction = {this.q2_SeeAndSay}/>
		 		<Exercise questionName = "Bài 4: Số thuận nghịch" DeBai = {ex4} passedFunction = {this.q4_thuannghich} />
		 		<Exercise questionName = "Bài 6: Chia kẹo " DeBai = {ex6} passedFunction = {this.q6_TeosCandy} />
		 		<Exercise questionName = "Bài 8: M O O" DeBai = {ex8} passedFunction = {this.q8_CountCow} />
		 		<Exercise questionName = "Bài 10: Tính sát thương" DeBai = {ex10} passedFunction = {this.q10_UrsaDota} />
			</div>
		</div>

		)
	}
}

export default JSguest;
