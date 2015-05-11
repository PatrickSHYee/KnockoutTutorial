using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KnockoutTutorial.Startup))]
namespace KnockoutTutorial
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
