import Mock from 'mockjs'

import frequency from './frequency'

// abc
Mock.mock(/\/abc\/list/, 'get', frequency.abc)

export default Mock