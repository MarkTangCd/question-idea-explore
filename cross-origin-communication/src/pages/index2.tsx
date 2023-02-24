function Index2Page() {
  return (
    <div>
      <div>
        <iframe title="Index2" style={{width: '100%', height: '300px'}} src="http://localhost:3001/test"></iframe>
      </div>
      <div>
        Hello Index2 Page
        <a href="http://localhost:3000/" target="_blank" rel="noreferrer">Go to another website</a>
      </div>
    </div>
  );
}

export default Index2Page;