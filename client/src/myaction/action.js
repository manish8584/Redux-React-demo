export const handleInputAction = (input)=>{
	return {
		type:'UPDATE_INPUT',
		payload: input
	}
}

export const fetchWishAction = ()=>{
	return  (dispatch)=>{
		fetch('/data')
      .then(res=>res.json())
      .then(res2=>{
		  dispatch({ type :"GET_WISH", payload: res2})
      })
	}
}

export const handleSubmitAction = (e)=>{
    return  (dispatch)=>{
          e.preventDefault();
          var data = new URLSearchParams();
           for(const pair of new FormData(e.target)){
             data.append(pair[0],pair[1])
           }
          fetch('/sent',{
              method:"post",
              body:data,
  
          }).then(res=>res.json())
          .then(res2 => {
			  console.log(' Submit Action',res2)
			  dispatch({ type: "ADD_Wish", payload: res2})
          })
    }
}

export const handleDeleteAction = (id)=> {
	return (dispatch)=> {
		fetch('/remove/'+id,{method:"delete"})
			.then(res=>res.json())
			.then(res2=>{
				console.log('Delete Action',res2) 
				dispatch({type: "Delete_Wish", payload: res2})
			})
	}
}
