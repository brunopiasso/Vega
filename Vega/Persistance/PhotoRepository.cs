﻿using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vega.Core;
using Vega.Core.Models;

namespace Vega.Persistance
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly VegaDbContext context;

        public PhotoRepository(VegaDbContext context)
        {
            this.context = context;
        }

        public async Task<List<Photo>> GetPhotos()
        {
            return await context.Photos
                .ToListAsync();
        }

        public async Task<IEnumerable<Photo>> GetVehiclePhotos(int vehicleId)
        {
            return await context.Photos
                .Where(p => p.VehicleId == vehicleId)
                .ToListAsync();
        }
    }
}