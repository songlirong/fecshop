import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/business/index'
import shop from '../components/business/shop'
import goods from '../components/business/goods'
import order from '../components/business/order'
import data from '../components/business/data'
import account from '../components/business/account'
import GoodsAssess from '../components/business/goods/GoodsAssess'
import GoodsList from '../components/business/goods/GoodsList'
import GoodsManage from '../components/business/goods/GoodsManage'
import GoodsAdd1 from '../components/business/GoodsAdd1'
import GoodsAdd2 from '../components/business/GoodsAdd2'
import GoodsAdd3 from '../components/business/GoodsAdd3'
import GoodsDetails from '../components/business/GoodsDetails'
import OrderIssue from '../components/business/order/OrderIssue'
import OrderList from '../components/business/order/OrderList'
import OrderTake from '../components/business/order/OrderTake'
import OrderDetails from '../components/business/OrderDetails'
import OrderTakeDetails from '../components/business/OrderTakeDetails'
import OrderListDetails from '../components/business/OrderListDetails'
import ShopActivity from '../components/business/shop/ShopActivity'
import ShopConsult from '../components/business/shop/ShopConsult'
import ShopCoupon from '../components/business/shop/ShopCoupon'
import ShopPicture from '../components/business/shop/ShopPicture'
import ShopMessage from '../components/business/shop/ShopMessage'
import ShopActivityAdd from '../components/business/ShopActivityAdd'
import ShopActivityEdit from '../components/business/ShopActivityEdit'
import ShopCouponAdd from '../components/business/ShopCouponAdd'
import ShopCouponEdit from '../components/business/ShopCouponEdit'
import AccountBill from '../components/business/account/AccountBill'
import AccountThawing from '../components/business/account/AccountThawing'
import AccountMoney from '../components/business/account/AccountMoney'
import AccountMoney1 from '../components/business/AccountMoney1'
import ShiMing from '../components/business/account/ShiMing'
import DataSale from '../components/business/data/DataSale'
import DataOrder from '../components/business/data/DataOrder'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
        },
        {
            path: '/goods',
            name: 'goods',
            component: goods,
            children: [
                {
                    path: '/',
                    component: GoodsList
                },
                {
                    path: '/goods/GoodsManage',
                    component: GoodsManage
                },
                {
                    path: '/goods/GoodsAssess',
                    component: GoodsAssess
                }
            ]
        },
        {
            path: '/GoodsAdd1',
            name: 'GoodsAdd1',
            component: GoodsAdd1

        },
        {
            path: '/GoodsAdd2',
            name: 'GoodsAdd2',
            component: GoodsAdd2
        },
        {
            path: '/GoodsAdd3',
            name: 'GoodsAdd3',
            component: GoodsAdd3
        },
        {
            path: '/GoodsDetails',
            name: 'GoodsDetails',
            component: GoodsDetails
        },
        {
            path: '/AccountMoney1',
            name: 'AccountMoney1',
            component: AccountMoney1

        },
        {
            path: '/shop',
            name: 'shop',
            component: shop,
            children: [
                {
                    path: '/',
                    component: ShopMessage
                },
                {
                    path: '/shop/ShopPicture',
                    component: ShopPicture
                },
                {
                    path: '/shop/ShopActivity',
                    component: ShopActivity
                },
                {
                    path: '/shop/ShopCoupon',
                    component: ShopCoupon
                },
                {
                    path: '/shop/ShopConsult',
                    component: ShopConsult
                },
            ]
        },{
            path: '/ShopActivityAdd',
            name: 'ShopActivityAdd',
            component: ShopActivityAdd

        },
        {
            path: '/ShopActivityEdit',
            name: 'ShopActivityEdit',
            component: ShopActivityEdit

        },{
            path: '/ShopCouponEdit',
            name: 'ShopCouponEdit',
            component: ShopCouponEdit

        },{
            path: '/ShopCouponAdd',
            name: 'ShopCouponAdd',
            component: ShopCouponAdd

        },
        {
            path: '/order',
            name: 'order',
            component: order,
            children: [
                {
                    path: '/',
                    component: OrderList
                },
                {
                    path: '/order/OrderIssue',
                    component: OrderIssue
                },
                {
                    path: '/order/OrderTake',
                    component: OrderTake
                },]
        }, {
            path: '/OrderDetails',
            name: 'OrderDetails',
            component: OrderDetails

        }, {
            path: '/OrderTakeDetails',
            name: 'OrderTakeDetails',
            component: OrderTakeDetails

        }, {
            path: '/OrderListDetails',
            name: 'OrderListDetails',
            component: OrderListDetails
        }, {
            path: '/account',
            name: 'account',
            component: account,
            children: [
                {
                    path: '/',
                    component: ShiMing
                },
                {
                    path: '/account/AccountBill',
                    component: AccountBill
                },
                {
                    path: '/account/AccountMoney',
                    component: AccountMoney
                },
                {
                    path: '/account/AccountThawing',
                    component: AccountThawing
                },
            ]
        },
        {
            path: '/data',
            name: 'data',
            component: data,
            children: [
                {
                    path: '/',
                    component: DataOrder
                },
                {
                    path: '/data/DataSale',
                    component: DataSale
                }
            ]
        }
    ]
})
