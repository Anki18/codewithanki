import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  actionFilterCodeStrig,
  logFilterCodeString,
  homeControllerCodeString,
} from "./codeStrings";
import img1 from "./img/ActionFilterImg1.png";
import img2 from "./img/ActionFilterImg2.png";
import img3 from "./img/ActionFilterImg3.png";
import img4 from "./img/ActionFilterImg4.png";

import "./css/filtersaspmvc.css";

function FiltersAspMvc(props) {
  return (
    <div className="row">
      <div className="card-panel">
        <h5>Introduction</h5>
        <p>
          As part of this article, we will learn about ASP.Net MVC filters,
          their different types and we will create a custom log Action Filter
          using Visual Studio. So without wasting any time let's start.
        </p>
      </div>
      <div className="card-panel">
        <h5>What are ASP.Net MVC filters</h5>
        <p>
          In an ASP.Net MVC Web application, we have action methods defined in
          controllers that call from different views. For example, when the user
          clicks on some button on the view, a request goes to the designated
          controller and then the corresponding action method. Within this flow,
          sometimes we want to perform logic either before an action method is
          called or after an action method runs.
          <br />
          <br />
          To fulfill the above condition ASP.Net MVC provides us filters.
          Filters are the custom classes that provide us with an option to add
          pre-action and post-action behavior to controller action methods.
        </p>
        <>
          <span>
            ASP.NET MVC framework supports four different types of filters:
          </span>
          <ul>
            <li>- Authorization filters</li>
            <li>- Action filters</li>
            <li>- Result filters</li>
            <li>- Exception filters</li>
          </ul>
          <span>
            <u>
              <b>Note</b>
            </u>
            <br />
            They are executed in the order listed above.
          </span>
        </>
      </div>
      <div className="card-panel">
        <h5>Authorization filters</h5>
        <p>
          In ASP.NET MVC web application by default, all the action methods of
          all the controllers can be accessible for all the users (for both
          authenticated and anonymous users both). For this, if we want to
          restrict some action methods from anonymous users or we want to allow
          the action methods only to an authenticated user, then you need to use
          the Authorization Filter in MVC. <br />
          <br /> The Authorization Filter provides two built-in attributes such
          as Authorize and AllowAnonymous. We can decorate our action methods
          with the Authorize attribute which allows access to the only
          authenticated user and we can use AllowAnonymous attribute to allow
          some action method to all users.
          <br />
          <br /> We can also create custom Authorization filters for this we
          have to implement IAuthenticationFilter interface and have overrides
          its OnAuthentication() and OnAuthenticationChallenge(). We are going
          deep into it.
        </p>
        <h5>Action filters</h5>
        <div>
          In the ASP.NET MVC web application, action filters are used to perform
          some logic before and after action methods. The output cache is one of
          the built-in action filters which we can use in our action methods.
          <SyntaxHighlighter language="csharp">
            {actionFilterCodeStrig}
          </SyntaxHighlighter>
          We can also create a custom action filter either by implementing
          IActionFilter interface and FilterAttribute class or by deriving the
          ActionFilterAttribute abstract class. As part of this article, I am
          covering creating a custom action filter using the
          ActionFilterAttribute abstract class.
          <br />
          <br />
          ActionFilterAttribute includes the following method to override it
          <br />
        </div>
        <>
          <ul>
            <li>
              - void OnActionExecuted(ActionExecutedContext filterContext)
            </li>
            <li>
              - void OnActionExecuting(ActionExecutingContext filterContext)
            </li>
            <li>
              - void OnResultExecuted(ResultExecutedContext filterContext)
            </li>
            <li>
              - void OnResultExecuting(ResultExecutingContext filterContext)
            </li>
          </ul>
          We will see this in detail below.
        </>
        <h5>Result filters</h5>
        <p>
          In an ASP.NET MVC web application, result filters are used to perform
          some logic before and after a view result is executed. For example, we
          might want to modify a view result right before the view is rendered.
        </p>
        <h5>Exception filters</h5>
        <p>
          In the ASP.NET MVC web application, we can use an exception filter to
          handle errors raised by either our controller actions or controller
          action results. We also can use exception filters to log errors.
        </p>
      </div>
      <div className="card-panel">
        <h5>Creating a Log Action Filter</h5>
        <div>
          Open Visual Studio and create a new ASP.NET Web Application <br />
          <img src={img1} alt="anki" />
          <br />
          Choose Empty, select “MVC” and then click the OK button. <br />
          <img src={img2} alt="anki" />
          <br />
          Add a ‘Filters’ folder and create a new class LogActionFilter.cs under
          it:
          <SyntaxHighlighter language="csharp">
            {logFilterCodeString}
          </SyntaxHighlighter>
          <br />
          We overrides OnActionExecuting(), OnActionExecuted(),
          OnResultExecuting(), and OnResultExecuted() methods all are calling
          the Log() method. The name of the method and the current route data is
          passed to the Log() method. The Log() method writes a message to the
          Visual Studio Output window.
          <br />
          <br />
          Now, add HomeController.cs under the Controllers folder.
          <br />
          <SyntaxHighlighter language="csharp">
            {homeControllerCodeString}
          </SyntaxHighlighter>
          <br />
          After adding the above files our folder structure will look like this:
          <br />
          <img src={img3} alt="anki" className="img-half"/>
          <br />
          Now run the application, we can see the results in the “Output” window
          <img src={img4} alt="anki" />
          Thanks for reading this, and stay tuned for the next articles.
        </div>
      </div>
    </div>
  );
}

FiltersAspMvc.propTypes = {};

export default FiltersAspMvc;
