module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/results-summary-component/'
      : '/'
}
