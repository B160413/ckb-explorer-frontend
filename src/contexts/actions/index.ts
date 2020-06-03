export enum AppActions {
  ResizeWindow = 'resizeWindow',
  UpdateLoading = 'updateLoading',
  UpdateSecondLoading = 'updateSecondLoading',
  UpdateModal = 'updateModal',
  ShowToastMessage = 'showToastMessage',
  UpdateAppErrors = 'updateAppErrors',
  UpdateNodeVersion = 'updateNodeVersion',
  UpdateTipBlockNumber = 'updateTipBlockNumber',
  UpdateAppLanguage = 'updateAppLanguage',
}

export enum PageActions {
  UpdateAddress = 'updateAddress',
  UpdateAddressTransactions = 'updateAddressTransactions',
  UpdateAddressTotal = 'updateAddressTotal',
  UpdateAddressStatus = 'updateAddressStatus',
  UpdateAddressTransactionsStatus = 'updateAddressTransactionsStatus',

  UpdateHomeBlocks = 'updateHomeBlocks',

  UpdateBlockList = 'updateBlockList',
  UpdateBlockListTotal = 'updateBlockListTotal',

  UpdateBlock = 'updateBlock',
  UpdateBlockTransactions = 'updateBlockTransactions',
  UpdateBlockTotal = 'updateBlockTotal',
  UpdateBlockStatus = 'updateBlockStatus',

  UpdateTransaction = 'updateTransaction',
  UpdateTransactionStatus = 'updateTransactionStatus',
  UpdateTransactionScriptFetched = 'updateTransactionScriptFetched',
  UpdateTransactions = 'updateTransactions',
  UpdateTransactionsTotal = 'updateTransactionsTotal',

  UpdateStatistics = 'updateStatistics',

  UpdateStatisticDifficultyHashRate = 'updateStatisticDifficultyHashRate',
  UpdateStatisticDifficultyHashRateFetchEnd = 'updateStatisticDifficultyHashRateFetchEnd',
  UpdateStatisticDifficultyUncleRate = 'updateStatisticDifficultyUncleRate',
  UpdateStatisticDifficultyUncleRateFetchEnd = 'updateStatisticDifficultyUncleRateFetchEnd',
  UpdateStatisticDifficulty = 'updateStatisticDifficulty',
  UpdateStatisticDifficultyFetchEnd = 'updateStatisticDifficultyFetchEnd',
  UpdateStatisticHashRate = 'updateStatisticHashRate',
  UpdateStatisticHashRateFetchEnd = 'updateStatisticHashRateFetchEnd',
  UpdateStatisticUncleRate = 'updateStatisticUncleRate',
  UpdateStatisticUncleRateFetchEnd = 'updateStatisticUncleRateFetchEnd',
  UpdateStatisticTransactionCount = 'updateStatisticTransactionCount',
  UpdateStatisticTransactionCountFetchEnd = 'updateStatisticTransactionCountFetchEnd',
  UpdateStatisticAddressCount = 'updateStatisticAddressCount',
  UpdateStatisticAddressCountFetchEnd = 'updateStatisticAddressCountFetchEnd',
  UpdateStatisticTotalDaoDeposit = 'updateStatisticTotalDaoDeposit',
  UpdateStatisticTotalDaoDepositFetchEnd = 'updateStatisticTotalDaoDepositFetchEnd',
  UpdateStatisticNewDaoDeposit = 'updateStatisticNewDaoDeposit',
  UpdateStatisticNewDaoDepositFetchEnd = 'updateStatisticNewDaoDepositFetchEnd',
  UpdateStatisticNewDaoWithdraw = 'updateStatisticNewDaoWithdraw',
  UpdateStatisticNewDaoWithdrawFetchEnd = 'updateStatisticNewDaoWithdrawFetchEnd',
  UpdateStatisticCirculationRatio = 'updateStatisticCirculationRatio',
  UpdateStatisticCirculationRatioFetchEnd = 'updateStatisticCirculationRatioFetchEnd',
  UpdateStatisticCellCount = 'updateStatisticCellCount',
  UpdateStatisticCellCountFetchEnd = 'updateStatisticCellCountFetchEnd',
  UpdateStatisticAddressBalanceRank = 'updateStatisticAddressBalanceRank',
  UpdateStatisticAddressBalanceRankFetchEnd = 'updateStatisticAddressBalanceRankFetchEnd',
  UpdateStatisticBalanceDistribution = 'updateStatisticBalanceDistribution',
  UpdateStatisticBalanceDistributionFetchEnd = 'updateStatisticBalanceDistributionFetchEnd',
  UpdateStatisticTxFeeHistory = 'updateStatisticTxFeeHistory',
  UpdateStatisticTxFeeHistoryFetchEnd = 'updateStatisticTxFeeHistoryFetchEnd',
  UpdateStatisticBlockTimeDistribution = 'updateStatisticBlockTimeDistribution',
  UpdateStatisticBlockTimeDistributionFetchEnd = 'updateStatisticBlockTimeDistributionFetchEnd',
  UpdateStatisticAverageBlockTime = 'updateStatisticAverageBlockTime',
  UpdateStatisticAverageBlockTimeFetchEnd = 'updateStatisticAverageBlockTimeFetchEnd',
  UpdateStatisticOccupiedCapacity = 'updateStatisticOccupiedCapacity',
  UpdateStatisticOccupiedCapacityFetchEnd = 'updateStatisticOccupiedCapacityFetchEnd',
  UpdateStatisticEpochTimeDistribution = 'updateStatisticEpochTimeDistribution',
  UpdateStatisticEpochTimeDistributionFetchEnd = 'updateStatisticEpochTimeDistributionFetchEnd',
  UpdateStatisticEpochLengthDistribution = 'updateStatisticEpochLengthDistribution',
  UpdateStatisticEpochLengthDistributionFetchEnd = 'updateStatisticEpochLengthDistributionFetchEnd',
  UpdateStatisticNewNodeCount = 'updateStatisticNewNodeCount',
  UpdateStatisticNewNodeCountFetchEnd = 'updateStatisticNewNodeCountFetchEnd',
  UpdateStatisticNodeDistribution = 'updateStatisticNodeDistribution',
  UpdateStatisticNodeDistributionFetchEnd = 'updateStatisticNodeDistributionFetchEnd',
  UpdateStatisticTotalSupply = 'updateStatisticTotalSupply',
  UpdateStatisticTotalSupplyFetchEnd = 'updateStatisticTotalSupplyFetchEnd',
  UpdateStatisticAnnualPercentageCompensation = 'UpdateStatisticAnnualPercentageCompensation',
  UpdateStatisticAnnualPercentageCompensationFetchEnd = 'UpdateStatisticAnnualPercentageCompensationFetchEnd',
  UpdateStatisticSecondaryIssuance = 'updateStatisticSecondaryIssuance',
  UpdateStatisticSecondaryIssuanceFetchEnd = 'updateStatisticSecondaryIssuanceFetchEnd',
  UpdateStatisticInflationRate = 'updateStatisticInflationRate',
  UpdateStatisticInflationRateFetchEnd = 'updateStatisticInflationRateFetchEnd',
  UpdateStatisticLiquidity = 'updateStatisticLiquidity',
  UpdateStatisticLiquidityFetchEnd = 'updateStatisticLiquidityFetchEnd',
  UpdateStatisticMinerAddressDistribution = 'updateStatisticMinerAddressDistribution',
  UpdateStatisticMinerAddressDistributionFetchEnd = 'updateStatisticMinerAddressDistributionFetchEnd',
  UpdateStatisticMinerMoreAddressDistribution = 'updateStatisticMinerMoreAddressDistribution',
  UpdateStatisticMinerMoreAddressDistributionFetchEnd = 'updateStatisticMinerMoreAddressDistributionFetchEnd',

  UpdateNervosDao = 'updateNervosDao',
  UpdateNervosDaoTransactions = 'updateNervosDaoTransactions',
  UpdateNervosDaoTransactionsStatus = 'updateNervosDaoTransactionsStatus',
  UpdateNervosDaoTransactionsTotal = 'updateNervosDaoTransactionsTotal',
  UpdateNervosDaoDepositors = 'updateNervosDaoDepositors',
  UpdateNervosDaoStatus = 'updateNervosDaoStatus',

  UpdateUDT = 'updateUDT',
  UpdateUDTTransactions = 'updateUDTTransactions',
  UpdateUDTTransactionsTotal = 'updateUDTTransactionsTotal',
  UpdateUDTStatus = 'updateUDTStatus',
}

export enum ComponentActions {
  UpdateHeaderSearchEditable = 'updateHeaderSearchEditable',
  UpdateHeaderMobileMenuVisible = 'updateHeaderMobileMenuVisible',
  UpdateHeaderSearchBarVisible = 'updateHeaderSearchBarVisible',
}

export type StateActions = AppActions | PageActions | ComponentActions

export default StateActions
