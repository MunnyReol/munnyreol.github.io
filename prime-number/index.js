function api(req, res) {

const get_num = req.query.num

const inc_num = (get_num % 10)+1


function yt(num){

        for (var i = 2; i<num; i++){
  var  divide = (num/i)
  var no_dot = Math.floor(divide)
      if(divide == no_dot){
          console.log("not prime number "+num+" is can divide by "+divide)
                        res.send(`
                        <script>
                        function inc(){
                            window.location.href = "?num="+${get_num+inc_num}
                        }
                        </script>
                        <h1>${num} is  not prime number, it can divide by ${divide}</h1>
                        <p></p>
                        <button onclick='inc()'> Increase One More Number</button>
                        `)

          return
      } else if(i == num-1){
           console.log(num+" is prime number"+" it can't be divide without 1 & itself ("+num+") ")
 res.send(`
 <script>
 function inc(){
     window.location.href = "?num="+${get_num+inc_num}
 }
 </script>
 <h1>${num} is prime number it can't be divide without 1 & itself "${num}"</h1>
 <p></p>
 <button onclick='inc()'> Increase One More Number</button>
 `)
 
return
}}}

yt(get_num)

}

export default api
