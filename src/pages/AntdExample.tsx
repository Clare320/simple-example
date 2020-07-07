import React, { FC, lazy, useState, useEffect } from 'react'
import { Button, Descriptions, Table } from 'antd'
import { useToggle } from 'ahooks'
import Loadable from 'react-loadable'
import styles from './AntdExample.less'
import Love from './Run'

interface Record {
  id: number
  amount: number
  time: string
}

const AntdExample: FC = () => {
  const [state, { toggle }] = useToggle('正', '反')
  const [greeter, setGreeter] = useState<FC | null>(null)
  useEffect(() => {
    import('./DynamicGreeter').then(obj => {
      const DefaultElement = obj.default as FC
      setGreeter(DefaultElement)
    })
  }, [])

  const dataSource = (
    () => {
      const records: Array<Record> = []
      let i = 0
      while (i < 100) {
        records.push({
          id: 110000 + i,
          amount: 10000 + i,
          time: i < 10 ? `2020-07-02 10:0${i}` : `2020-07-02 10:${i}`
        })
        i++
      }
      return records
    }
  )()

  const columns = [
    {
      title: '记录编号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: '操作',
      key: 'action',
      render: () => (<Button type="primary">详情</Button>)
    }
  ]

  const LoadableGreeter = Loadable({
    loader: () => import('./DynamicGreeter'),
    loading() {
      return <div>Loading...Loadable</div>
    }
  })

  return (
    <div>
      <Button type="primary" onClick={() => toggle()}>测试aHooks-{state}</Button>
      <Love orientation={state} />
      {
        greeter !== null &&
        (() => {
          const Greeter = greeter as FC
          return Greeter
        })()
      }
      <LoadableGreeter />

      <div className={styles['record-view']}>
        <Descriptions className={styles.descriptions} title="转账记录">
          <Descriptions.Item label="工号">100000</Descriptions.Item>
          <Descriptions.Item label="对账员">水娃</Descriptions.Item>
          <Descriptions.Item label="时间">2020-07-03 09:42:36</Descriptions.Item>
          <Descriptions.Item label="交易行">中国工商银行</Descriptions.Item>
        </Descriptions>
        <Table rowKey='id' dataSource={dataSource} columns={columns} />
      </div>
    </div>
  )
}

export default AntdExample