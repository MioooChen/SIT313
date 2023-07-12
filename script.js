// 获取表单元素和提交按钮
var form = document.querySelector('form');
var submitButton = document.querySelector('input[type="submit"]');

// 添加提交事件监听器
form.addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单提交的默认行为

  // 获取输入的体重和身高
  var weightInput = document.getElementById('fname');
  var heightInput = document.getElementById('lname');
  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value);

  // 验证输入是否有效
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Please enter valid weight and height values.');
    return;
  }

  // 计算 BMI
  var bmi = weight / (height*height);
  var message;

  if (bmi <= 18.5){
    message ='Underweight';
  }
  else if (bmi <= 25){
    message ='Normal';
  }
  else if (bmi <= 30){
    message ='Overweight';
  }
  else {
    message ='Obese';
  }

  message = 'Your BMI is: ' + bmi.toFixed(2) + '. ' + message;

  alert(message);
  // 清空输入
  weightInput.value = '';
  heightInput.value = '';
});