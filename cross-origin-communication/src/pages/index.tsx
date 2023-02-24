function IndexPage() {
  return (
    <div>
      <div>
        <iframe title="Index" style={{width: '100%', height: '300px'}} src="http://localhost:3001/test"></iframe>
      </div>
      <div>
        Hello Index Page
        <a href="http://localhost:3002/" target="_blank" rel="noreferrer" >Go to another website</a>
      </div>
    </div>
  );
}

export default IndexPage;