function Age(props){
    return <>
  { props.age > 18 ?
   <p>Your age is {props.age}</p> : <p>You're too young </p>}</>

}
export default Age