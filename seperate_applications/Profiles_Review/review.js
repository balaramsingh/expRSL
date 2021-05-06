var NewComponent = Review({
  render{
    return (
      <div>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{__html: "\n\n\n.center1{\n      text-align:center;\n       color:red;\n}\n\n \n.center2{\n      text-align:center;\n       color:orange;\n}\n\n .box{\n\n  \n  background-color: lightblue;\n  width: 680px;\n  border:10px solid blue;\n  padding: 35px;\n  margin: 20px;\n  margin-left: 30%;\n  margin-right: 30%;\n\n\n }\n\n\n \n" }} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <title>Review &amp; Rating</title>
        <h3 className="center1"> <u> EXPRSL </u> </h3>
        <h3 className="center1"> <u> REVIEW AND RATING </u> </h3>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <div className="box">
          <div className="container">
            <form className="form-horizontal" role="form">
              <div className="form-group">
                <label htmlFor="customerName" className="col-sm-3 control-label"> Name</label>
                <div className="col-sm-9">
                  <input type="text" id="customerName" placeholder="Customer Name" className="form-control" autofocus />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exprslreview" className="col-sm-3 control-label"> Review</label>
                <div className="col-sm-9">
                  <input type="text" id="exprslreview" placeholder="EXPRSL Review" className="form-control" autofocus />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Experience </label>
                <div className="col-sm-9">
                  <input type="radio" id="good" name="review" defaultValue="good" />
                  <label htmlFor="good">Good</label><br />
                  <input type="radio" id="average" name="review" defaultValue="average" />
                  <label htmlFor="average">Average</label><br />
                  <input type="radio" id="bad" name="review" defaultValue="bad" />
                  <label htmlFor="bad">Bad</label>
                </div>
              </div> 
              <div className="form-group">
                <label htmlFor="rating" className="col-sm-3 control-label">Rating out of 5</label>
                <div className="col-sm-9">
                  <input type="text" id="rating" placeholder="Customer Rating" className="form-control" autofocus />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-9 col-sm-offset-3">
                  <button type="submit" className="btn btn-success btn-block">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default Review;
