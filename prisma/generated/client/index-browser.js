
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  userName: 'userName',
  fname: 'fname',
  lname: 'lname',
  fullname: 'fullname',
  role: 'role',
  permission: 'permission',
  email: 'email',
  avatarPath: 'avatarPath',
  avatarSrc: 'avatarSrc',
  phone: 'phone',
  refreshToken: 'refreshToken',
  password: 'password',
  passwordRt: 'passwordRt',
  ipv4: 'ipv4',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  avatarPath: 'avatarPath',
  avatarSrc: 'avatarSrc',
  fname: 'fname',
  lname: 'lname',
  fullname: 'fullname',
  email: 'email',
  phone: 'phone',
  credit: 'credit',
  point: 'point',
  lineId: 'lineId',
  baned: 'baned',
  ipv4: 'ipv4',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.User_credit_transactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  adminId: 'adminId',
  updateBy: 'updateBy',
  updateType: 'updateType',
  beforeUpdate: 'beforeUpdate',
  afterUpdate: 'afterUpdate',
  credit: 'credit',
  remark: 'remark',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.User_point_transactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  adminId: 'adminId',
  updateBy: 'updateBy',
  updateType: 'updateType',
  beforeUpdate: 'beforeUpdate',
  afterUpdate: 'afterUpdate',
  point: 'point',
  remark: 'remark',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Payment_transactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  price: 'price',
  refCode: 'refCode',
  status: 'status',
  base64: 'base64',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  default: 'default',
  addressName: 'addressName',
  details: 'details',
  remarks: 'remarks',
  receiverFname: 'receiverFname',
  receiverLname: 'receiverLname',
  receiverFullname: 'receiverFullname',
  receiverPhone: 'receiverPhone',
  houseNo: 'houseNo',
  villageNo: 'villageNo',
  road: 'road',
  province: 'province',
  district: 'district',
  subDistrict: 'subDistrict',
  postCode: 'postCode',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BrandScalarFieldEnum = {
  id: 'id',
  name: 'name',
  detail: 'detail',
  imagePath: 'imagePath',
  imageSrc: 'imageSrc',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  detail: 'detail',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  detail: 'detail',
  imagePath: 'imagePath',
  imageSrc: 'imageSrc',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Sub_categoryScalarFieldEnum = {
  id: 'id',
  categoryId: 'categoryId',
  name: 'name',
  detail: 'detail',
  imagePath: 'imagePath',
  imageSrc: 'imageSrc',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Product_reviewScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  adminId: 'adminId',
  detail: 'detail',
  rating: 'rating',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Review_imageScalarFieldEnum = {
  id: 'id',
  imagePath: 'imagePath',
  imageSrc: 'imageSrc',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  brandId: 'brandId',
  adminId: 'adminId',
  name: 'name',
  shortName: 'shortName',
  detail: 'detail',
  isDiscount: 'isDiscount',
  discountPercent: 'discountPercent',
  minPrice: 'minPrice',
  maxPrice: 'maxPrice',
  slug: 'slug',
  cardImgPath: 'cardImgPath',
  cardImgSrc: 'cardImgSrc',
  optionFirst: 'optionFirst',
  optionSecond: 'optionSecond',
  isWholesale: 'isWholesale',
  rating: 'rating',
  sold: 'sold',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Product_tagScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  tagId: 'tagId',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Product_wholesaleScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  min: 'min',
  price: 'price',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Product_option_firstScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  name: 'name',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Product_option_secondScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  name: 'name',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Product_priceScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  product_option_firstId: 'product_option_firstId',
  product_option_secondId: 'product_option_secondId',
  price: 'price',
  sku: 'sku',
  isWholesale: 'isWholesale'
};

exports.Prisma.Product_detailScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  name: 'name',
  details: 'details',
  imagePath: 'imagePath',
  imageSrc: 'imageSrc',
  videoPath: 'videoPath',
  videoSrc: 'videoSrc',
  videoType: 'videoType',
  link: 'link',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Product_imageScalarFieldEnum = {
  id: 'id',
  name: 'name',
  path: 'path',
  src: 'src',
  sequence: 'sequence',
  productId: 'productId',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Product_specScalarFieldEnum = {
  id: 'id',
  name: 'name',
  data: 'data',
  productId: 'productId'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  product_priceId: 'product_priceId',
  qty: 'qty',
  price: 'price',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  statusNow: 'statusNow',
  status: 'status',
  paymentType: 'paymentType',
  paymentStatus: 'paymentStatus',
  createUsing: 'createUsing',
  pointUsing: 'pointUsing',
  orderPrice: 'orderPrice',
  deliveryPrice: 'deliveryPrice',
  netPrice: 'netPrice',
  orderDiscount: 'orderDiscount',
  deliveryDiscount: 'deliveryDiscount',
  orderDiscountCode: 'orderDiscountCode',
  deliveryDiscountCode: 'deliveryDiscountCode',
  addressId: 'addressId',
  addressData: 'addressData',
  userData: 'userData',
  isReject: 'isReject',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Order_productScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  orderId: 'orderId',
  product_priceId: 'product_priceId',
  qty: 'qty',
  price: 'price',
  productData: 'productData',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SettingScalarFieldEnum = {
  id: 'id',
  facebook: 'facebook',
  line: 'line',
  instagram: 'instagram',
  tiktok: 'tiktok',
  email: 'email',
  phone: 'phone',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Setting_serviceScalarFieldEnum = {
  id: 'id',
  lineNotiToken: 'lineNotiToken',
  gmpayToken: 'gmpayToken',
  seo: 'seo',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  admin: 'admin',
  user: 'user',
  user_credit_transaction: 'user_credit_transaction',
  user_point_transaction: 'user_point_transaction',
  payment_transaction: 'payment_transaction',
  address: 'address',
  brand: 'brand',
  tag: 'tag',
  category: 'category',
  sub_category: 'sub_category',
  product_review: 'product_review',
  review_image: 'review_image',
  product: 'product',
  product_tag: 'product_tag',
  product_wholesale: 'product_wholesale',
  product_option_first: 'product_option_first',
  product_option_second: 'product_option_second',
  product_price: 'product_price',
  product_detail: 'product_detail',
  product_image: 'product_image',
  product_spec: 'product_spec',
  cart: 'cart',
  order: 'order',
  order_product: 'order_product',
  setting: 'setting',
  setting_service: 'setting_service'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
