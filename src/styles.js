import{createGlobalStyle}  from "styled-components"

export const GlobalStyle=createGlobalStyle `
background-color: #fb9300;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  #container{
    color: aliceblue;
    border:5px solid #343f56;
    height:300px;
    width:800px;
  }
  #input{
    width:100px;
    margin:30px auto;
  }
  #btn{
    margin:30px auto 10px;
   
  }
  h1{
    color:#2541b2;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size:45px;
  }
  h2{
    color:#1768ac ;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  div{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  }
  p{
    font-size:30px;
  }
  button{
    border-radius:50px;
    height:60px;
    width:120px;
    background-color:#e5d549 ;
  }
  #container2{
    width:250px;
    border:5px solid #343f56;
    margin-top:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
  .hint{
    height:40px;
    width:100px;
    margin-bottom:5px;
  }
`
export const theme = {
   
        mainColor:"#242424",
        backgroundColor:"#fefafb",
}
  