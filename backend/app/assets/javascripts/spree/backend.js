//= require bootstrap-sprockets
//= require jquery
//= require jquery.cookie
//= require jquery.jstree/jquery.jstree
//= require jquery_ujs
//= require jquery-ui/datepicker
//= require jquery-ui/sortable
//= require jquery-ui/autocomplete
//= require modernizr
//= require underscore-min.js
//= require velocity
//= require spree
//= require spree/backend/spree-select2
//= require_tree .

Spree.routes.clear_cache = Spree.pathFor('admin/general_settings/clear_cache')
Spree.routes.checkouts_api = Spree.pathFor('api/v1/checkouts')
Spree.routes.classifications_api = Spree.pathFor('api/v1/classifications')
Spree.routes.option_type_search = Spree.pathFor('api/v1/option_types')
Spree.routes.option_value_search = Spree.pathFor('api/v1/option_values')
Spree.routes.orders_api = Spree.pathFor('api/v1/orders')
Spree.routes.products_api = Spree.pathFor('api/v1/products')
Spree.routes.product_search = Spree.pathFor('admin/search/products')
Spree.routes.shipments_api = Spree.pathFor('api/v1/shipments')
Spree.routes.checkouts_api = Spree.pathFor('api/v1/checkouts')
Spree.routes.stock_locations_api = Spree.pathFor('api/v1/stock_locations')
Spree.routes.taxon_products_api = Spree.pathFor('api/v1/taxons/products')
Spree.routes.taxons_search = Spree.pathFor('api/v1/taxons')
Spree.routes.user_search = Spree.pathFor('admin/search/users')
Spree.routes.variants_api = Spree.pathFor('api/v1/variants')

Spree.routes.edit_product = function(product_id) {
  return Spree.pathFor('admin/products/' + product_id + '/edit')
}

Spree.routes.payments_api = function(order_id) {
  return Spree.pathFor('api/v1/orders/' + order_id + '/payments')
}

Spree.routes.stock_items_api = function(stock_location_id) {
  return Spree.pathFor('api/v1/stock_locations/' + stock_location_id + '/stock_items')
}
