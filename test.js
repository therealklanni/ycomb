import test from 'tape'
import Y from './lib'

test('Y', t => {
  t.plan(4)

  let run = Y(f => n => {
    t.ok(true, 'fixed point called')
    return n <= 1 ? n : f(n - 1)
  })

  let args = Y(f => (a, b, c) => {
    t.ok(a+b+c, 'fixed point called with multiple args')
    return a <= 1 ? a : f(a - 1, b, c)
  })

  run(2)
  args(2, 1, 0)
})
