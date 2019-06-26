import React, {Component} from 'react';
import '../styles/js_exercise.css';
import Collapsible from 'react-collapsible';

class JS extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	       	input1: '',
	       	output1: '123', 
	    };
	}


	handleChange = (e) =>{
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	
	q1_Chemistry = (e) => {
		e.preventDefault();
 		var str = this.refs.ex1input.value
	    var output = this.refs.ex1output
	    var stack =[], temp = 0;
	    for ( var i = 0; i < str.length; i++){
	        if (str[i] ==="C") stack.push(12);
	        else if (str[i] === "H") stack.push(1);
	        else if (str[i] === "O") stack.push(16);
	        else if (str[i] === "(") stack.push(0);
	        else if (str[i] === ")"){
	            while(stack[stack.length-1] != 0 ){  
	                temp += stack[stack.length - 1];
	                stack.pop();
	            }      
	            stack.pop();
	            stack.push(temp);
	            temp = 0;
	        }
	        else if(str[i] >= "1" && str[i] <= "9"){
	            temp = stack[stack.length - 1] * parseInt(str[i]);
	            stack.pop();
	            stack.push(temp);
	            temp = 0;
	        }
	    }
	    
	    let sum = 0;
	    for ( i = 0; i < stack.length; i++){
	        sum += stack[i];
	    }
	    output.value = sum;
	    return output.value;
	}

	render(){
		
		return(
		<div class="">
	  		<div>
			  	<div id="address">
					<i>271/34 TRINH DINH TRONG STREET, TAN PHU DISTRICT, HO CHI MINH CITY</i>
				</div>
				<div id="contact">
					<i>093-153-6430 • MINHNGON01@GMAIL.COM</i>
				</div>

				<h1 className="myname"> <i>ĐẶNG MINH NGÔN</i>	</h1>
			</div>

			<div className="row exercise">

		 		<Collapsible trigger="Bài 1: Nguyên tố hóa học">
		 			<div>
			      		<p> Hóa chất chỉ gồm các nguyên tố C, H, O có trọng lượng 12, 1, 16 tương ứng</p>
			      		<p>Nó được biểu diễn dạng "nén", ví dụ COOHHH là CO2H3 hay CH (CO2H) (CO2H) (CO2H) là CH(CO2H)3.
						Nếu ở dạng nén thì số lần lặp {">="} 2 và {"<="} 9.</p>
						<p>Tính khối lượng hóa chất</p>
						<p>Input </p>
						<p className="indent-text"> Gồm một dòng mô tả hóa chất không quá 100 kí tự chỉ gồm C, H, O, (, ), 2,..,9.</p>
						<p>Output </p>
						<p className="indent-text"> Khối lượng của hóa chất (luôn {">="} 10000).</p>
						<p>VD:</p>
						<table className="table-io">
						  <tr>
						    <th>Input</th>
						    <th>Output</th> 
					
						  </tr>
						  <tr>
						    <td>COOH</td>
						    <td>45</td>						
						  </tr>
						  <tr>
						    <td>CH(CO2H)3</td>
						    <td>148</td> 
						  </tr>
						  <tr>
						  	<td>((CH)2(OH2H)(C(H))O)3</td>
						    <td>222</td>
						  </tr>
						</table>
			      	</div>
					
					<form  onSubmit = {this.q1_Chemistry} >
				      	<textarea 
				      	ref="ex1input"
				      	autocomplete='off' 
				      	className="mt-5" name="input1" 
				      	rows="10" cols="156"
				      	placeholder="Input here" 
				      	id="ex1-input"></textarea>
	  					<br/> 
	  					<input className = "process-btn"type = "submit" value = "Process"/>
  					</form>
  						<textarea 
  						ref="ex1output"
  						autocomplete='off'
  						disabled="true" className="mt-5 text-holder"name="output1" 
  						rows="10" cols="156" 
  						id="ex1-output"></textarea>
		 		</Collapsible>

		 		<Collapsible trigger="Bài 2: Nhìn và đọc">
		 			<div>
			      	<p>Phép biến đổi "nhìn và đọc" được định nghĩa như sau:</p>
			      	<p>Bắt đầu từ số ở đầu tiên X. Với các số giống nhau thì nhóm lại thành một dãy (giả sử có Y số) thì dãy này được chuyển thành YX.</p>
			      	<p> Ví dụ 122344111 đọc là "một 1, hai 2, một 3, hai 4, ba 1", do đó chuỗi 122344111 chuyển thành
					1122132431.</p>
			      	<p>Input</p>
			      	<p className = "indent-text">Dòng đầu chứa số bộ test:</p>
			      	<p className ="indent-text">Mỗi dòng sau chứa 1 bộ test chứa chuỗi cần biến đổi (không quá 1000 chữ số)</p>
			      	<p>Output</p>
			      	<p className ="indent-text">Với mỗi bộ test, in ra kết quả phép biến đổi</p>
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
					
					<form>
				      	<textarea 
				      	autocomplete='off' 
				      	class="mt-5" name="message" 
				      	rows="10" cols="156"
				      	placeholder="Input here" 
				      	id="ex2-input"></textarea>
	  					<br/>
	  					<button className = "process-btn" type="button">Proces</button>
  					</form>
  						
  						<textarea 
  						autocomplete='off'
  						disabled="true" class="mt-5"name="message" 
  						rows="10" cols="156" 
  						id="ex2-output"></textarea>
		 		</Collapsible>

		 		
			</div>
		</div>

		)
	}
}

export default JS;