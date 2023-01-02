fetch('https://reqres.in/api/users/23',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:'User 1'
            })
        })
         .then(res=> {
            if(res.ok){
                console.log('Success')
            } else{
                console.log('Not Su ccessful')
            }
            return res.json()
         })
         .then(data => console.log(data))
