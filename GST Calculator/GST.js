
function printresult(){
      
  n1 = document.getElementById("p").value;
  n2 = document.getElementById("q").value;
  opp = document.getElementById("opp").value;
  dis = document.getElementById("dis").value;
  document.getElementById("p1").innerHTML = n1;
  document.getElementById("q1").innerHTML = n2;
  // Quantity Amount
  document.getElementById("qa").innerHTML = n1 * n2;
  // discount %
  document.getElementById("dis1").innerHTML = dis;
  // discount amount
  disc = n1 * dis/100 * n2;
  disc = disc.toFixed(2);
  document.getElementById("dis2").innerHTML = disc;
  // total after discount
  sum = n1 * n2 - disc;
  document.getElementById("sm").innerHTML = sum;
  // gst %
  document.getElementById("per").innerHTML = opp;
  // total after discount and added GST
  max1 = sum * opp/100 + sum;
  max1 = max1.toFixed(2);
  document.getElementById("max1").innerHTML = max1;
  // gst amount after discount
  result1 = max1 - sum;
  result1 = result1.toFixed(2);
  document.getElementById("result").innerHTML = result1;
  // gst amount no discount
  gst = n1 * opp/100 * n2;
  document.getElementById("gst").innerHTML = gst;
  // total just added gst
  qa = n1 * n2;
  gst = n1 * opp/100 * n2;
  document.getElementById("max2").innerHTML = +qa + gst;
  // total savings
  max2 = +qa + gst;
  save = max2 - max1;
  save = save.toFixed(2);
  document.getElementById("save").innerHTML = save;
  
}
