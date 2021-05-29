'use strict';

const db = require('../models');
const { dateSeeds } = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.sequelize.sync();
    const { models } = db.sequelize;
    const { Country, Wine, Region, Subregion, Producer, Grape } = models;
    /*****************
     * COUNTRIES
     ****************/
    const US = await Country.findOne({ where: { name: 'United States' } });
    const France = await Country.findOne({ where: { name: 'France' } });
    const Italy = await Country.findOne({ where: { name: 'Italy' } });
    /****************
     * REGIONS
     ***************/
    const Texas = await Region.findOne({ where: { name: 'Texas' } });
    const Beaujolais = await Region.findOne({ where: { name: 'Beaujolais' } });
    const Veneto = await Region.findOne({ where: { name: 'Veneto' } });
    const Champagne = await Region.findOne({ where: { name: 'Champagne' } });
    const Alsace = await Region.findOne({ where: { name: 'Alsace' } });
    const EmiliaRomagna = await Region.findOne({
      where: { name: 'Emilia Romagna' },
    });
    const Loire = await Region.findOne({ where: { name: 'Loire' } });
    const Rhone = await Region.findOne({ where: { name: 'Texas' } });
    const California = await Region.findOne({ where: { name: 'Texas' } });
    /****************
     * SUBREGIONS
     ***************/
    const highPlains = await Subregion.findOne({
      where: { name: 'High Plains' },
    });
    const sonoma = await Subregion.findOne({
      where: { name: 'Sonoma County' },
    });
    /****************
     * PRODUCERS
     ***************/
    const southold = await Producer.findOne({
      where: { name: 'Southold Farm + Cellar' },
    });
    const yohannLardy = await Producer.findOne({
      where: { name: 'Domaine Yohann Lardy' },
    });
    const montelvini = await Producer.findOne({
      where: { name: 'Montelvini' },
    });
    const laurentPerrier = await Producer.findOne({
      where: { name: 'Laurent-Perrier' },
    });
    const domaineRiefle = await Producer.findOne({
      where: { name: 'Domaine Riefle' },
    });
    const dandy = await Producer.findOne({ where: { name: 'Dandy' } });
    const lonesta = await Producer.findOne({ where: { name: "L'onesta" } });
    const jousset = await Producer.findOne({
      where: { name: 'Lise et Bertrand Jousset' },
    });
    const austinWinery = await Producer.findOne({
      where: { name: 'The Austin Winery' },
    });
    const williamChris = await Producer.findOne({
      where: { name: 'William Chris' },
    });
    const masTheo = await Producer.findOne({ where: { name: 'Mas Theo' } });
    const lesLunes = await Producer.findOne({ where: { name: 'Les Lunes' } });

    /****************
     * GRAPES
     ***************/
    const cabernet = await Grape.findOne({
      where: { name: 'Cabernet Sauvignon' },
    });
    const carignan = await Grape.findOne({ where: { name: 'Carignan' } });
    const chardonnay = await Grape.findOne({ where: { name: 'chardonnay' } });
    const cinsault = await Grape.findOne({ where: { name: 'Cinsault' } });
    const gamay = await Grape.findOne({ where: { name: 'Gamay' } });
    const gewurztraminer = await Grape.findOne({
      where: { name: 'Gewurztraminer' },
    });
    const glera = await Grape.findOne({ where: { name: 'Glera' } });
    const grenache = await Grape.findOne({ where: { name: 'Grenache' } });
    const gruner = await Grape.findOne({ where: { name: 'Gruner' } });
    const lambrusco = await Grape.findOne({ where: { name: 'Lambrusco' } });
    const mourvedre = await Grape.findOne({ where: { name: 'Mourvedre' } });
    const pinotAuxerrois = await Grape.findOne({
      where: { name: 'Pinot Auxerrois' },
    });
    const pinotBlanc = await Grape.findOne({ where: { name: 'Pinot Blanc' } });
    const pinotGris = await Grape.findOne({ where: { name: 'Pinot Gris' } });
    const pinotNoir = await Grape.findOne({ where: { name: 'Pinot Noir' } });
    const riesling = await Grape.findOne({ where: { name: 'Riesling' } });
    const rousanne = await Grape.findOne({ where: { name: 'Rousanne' } });
    const sauvignonBlanc = await Grape.findOne({
      where: { name: 'Sauvignon Blanc' },
    });
    const syrah = await Grape.findOne({ where: { name: 'Syrah' } });
    const sangiovese = await Grape.findOne({ where: { name: 'Sangiovese' } });
    const tempranillo = await Grape.findOne({ where: { name: 'Tempranillo' } });
    const zinfandel = await Grape.findOne({ where: { name: 'Zinfandel' } });
    /****************
     * WINES/ASSOCIATIONS
     ***************/
    const soar = await Wine.findByPk(1);
    await soar.setCountries(US.id);
    await soar.setRegions(Texas.id);
    await soar.setSubregions(highPlains.id);
    await soar.setProducers(southold.id);
    await soar.setGrapes(rousanne.id, gruner.id)
    const bruyeres = await Wine.findByPk(2);
    await bruyeres.setCountries(France.id);
    await bruyeres.setRegions(Beaujolais.id);
    await bruyeres.setProducers(yohannLardy.id);
    const venegazzu = await Wine.findByPk(3);
    await venegazzu.setCountries(Italy.id);
    await venegazzu.setRegions(Veneto.id);
    await venegazzu.setProducers(montelvini.id);
    const cuvee = await Wine.findByPk(4);
    await cuvee.setCountries(France.id);
    await cuvee.setRegions(Champagne.id);
    await cuvee.setProducers(laurentPerrier.id);
    const cremant = await Wine.findByPk(5);
    await cremant.setCountries(France.id);
    await cremant.setRegions(Alsace.id);
    await cremant.setProducers(domaineRiefle.id);
    const dandyRose = await Wine.findByPk(6);
    await dandyRose.setCountries(US.id);
    await dandyRose.setRegions(Texas.id);
    await dandyRose.setProducers(dandy.id);
    const lonestaLambrusco = await Wine.findByPk(7);
    await lonestaLambrusco.setCountries(Italy.id);
    await lonestaLambrusco.setRegions(EmiliaRomagna.id);
    await lonestaLambrusco.setProducers(lonesta.id);
    const exile = await Wine.findByPk(8);
    await exile.setCountries(France.id);
    await exile.setRegions(Loire.id);
    await exile.setProducers(jousset.id);
    const austinTempranillo = await Wine.findByPk(9);
    await austinTempranillo.setCountries(US.id);
    await austinTempranillo.setRegions(Texas.id);
    await austinTempranillo.setSubregions(highPlains.id);
    await austinTempranillo.setProducers(austinWinery.id);
    const skeleton = await Wine.findByPk(10);
    await skeleton.setCountries(US.id);
    await skeleton.setRegions(Texas.id);
    await skeleton.setSubregions(highPlains.id);
    await skeleton.setProducers(williamChris.id);
    const ptit = await Wine.findByPk(11);
    await ptit.setCountries(France.id);
    await ptit.setRegions(Rhone.id);
    await ptit.setProducers(masTheo.id);
    const astral = await Wine.findByPk(12);
    await astral.setCountries(US.id);
    await astral.setRegions(California.id);
    await astral.setSubregions(sonoma.id);
    await astral.setProducers(lesLunes.id);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
