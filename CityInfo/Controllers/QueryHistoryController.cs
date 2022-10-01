using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CityInfo.Contexts;
using CityInfo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CityInfo.Controllers
{
    [Route("api/queries")]
    public class QueryHistoryController : ControllerBase
    {
        private readonly DataContext _context;

        public QueryHistoryController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<QueryDto>>> GetQueryHistory()
        {
            var queries = await _context.QueryHistory.ToListAsync();
            return Ok(queries);
        }
    }
}

