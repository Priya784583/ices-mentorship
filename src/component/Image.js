 
 function Image({title,bgcolor}) {
  let bg='dark';
    return (
      <>
    
      <img src="https://hdwpro.com/wp-content/uploads/2019/04/Nice-Rose-Flower-380x250.jpeg"alt="Katherine Johnson" />
        <div className={bg} style={{backgroundColor:bgcolor}}>{title}</div>
        </>
      
    );
  }
  export default Image;