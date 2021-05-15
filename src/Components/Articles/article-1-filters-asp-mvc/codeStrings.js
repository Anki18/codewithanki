export const actionFilterCodeStrig = `[OutputCache(Duration=100)]
public ActionResult Index()
{
   return View();
}`;

export const logFilterCodeString = `
using System.Diagnostics;  
using System.Web.Mvc;  
using System.Web.Routing;  
  
namespace FiltersMVC.Filters  
{  
    public class LogActionFilter : ActionFilterAttribute  
  
    {  
        public override void OnActionExecuting(ActionExecutingContext filterContext)  
        {  
            Log("OnActionExecuting", filterContext.RouteData);  
        }  
  
        public override void OnActionExecuted(ActionExecutedContext filterContext)  
        {  
            Log("OnActionExecuted", filterContext.RouteData);  
        }  
  
        public override void OnResultExecuting(ResultExecutingContext filterContext)  
        {  
            Log("OnResultExecuting", filterContext.RouteData);  
        }  
  
        public override void OnResultExecuted(ResultExecutedContext filterContext)  
        {  
            Log("OnResultExecuted", filterContext.RouteData);  
        }  
  
  
        private void Log(string methodName, RouteData routeData)  
        {  
            var controllerName = routeData.Values["controller"];  
            var actionName = routeData.Values["action"];  
            var message = $"{methodName} controller:{controllerName} action:{actionName}";  
            Debug.WriteLine(message, "Action Filter Log");  
        }  
    }  
} `;

export const homeControllerCodeString = `
using FiltersMVC.Filters;  
using System.Web.Mvc;  
  
namespace FiltersMVC.Controllers  
{  
    [LogActionFilter]  
    public class HomeController : Controller  
    {  
        // GET: Home  
        public ActionResult Index()  
        {  
            return View();  
        }  
    }  
} `;