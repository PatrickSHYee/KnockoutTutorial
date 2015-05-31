using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockoutTutorial.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Project()
        {
            ViewBag.Title = "Projects";
            ViewBag.Message = "Modifitying the 2nd tutorial of the Knockout.js working with lists and collections.  Not a realistic collection or list, but if used for an admin side to add and remove list of projects or assignments to be displayed on a client-side web page.";
            ViewBag.Detail = "The collection is programming languages that I want to learn or that I have already learned.  Some projects are had already done and some are in the planning stage.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Title = "Got Knockouted, Contact Pat!!";
            ViewBag.ContactSlogan = "Pat! Pat... Pat!";
            ViewBag.Message = "Knockoutjs.org tutorials are like for a responsive email page.  Using Bootstrap to stylize this page to make the page look better and pleasing to the eye.";

            return View();
        }
    }
}