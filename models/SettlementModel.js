function SettlementModel(npAddress) {
    this.name = npAddress.Present;
    this.warehouseCount = npAddress.Warehouses;
}

module.exports = SettlementModel;
