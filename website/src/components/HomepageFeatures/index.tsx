import React from 'react'
import clsx from 'clsx'
import Feature1 from '@site/src/components/svg/Feature1'
import Feature2 from '@site/src/components/svg/Feature2'
import Feature3 from '@site/src/components/svg/Feature3'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.FC<React.ComponentProps<'svg'>>
  className: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'いつもの、とは？',
    Svg: Feature1,
    className: styles.featureSvg,
    description: (
      <>
        <em>いつもの</em>は、開発時に頻繁に書くコード（主にユーティリティなど）のことを指しています。
        <br />
        プロジェクトにインストールすることで、サクッと<em>いつもの</em>
        を使うことができる、そんなパッケージを目指しています。
      </>
    ),
  },
  {
    title: 'どんなもの？',
    Svg: Feature2,
    className: styles.featureSvgLarge,
    description: (
      <>開発でよく使うユーティリティ関数、Reactコンポーネント、TypeScriptの型ユーティリティを提供するパッケージです。</>
    ),
  },
  {
    title: '利用できる言語は？',
    Svg: Feature3,
    className: styles.featureSvg,
    description: <>TypeScriptで開発しており、JavaScript、またはTypeScriptのプロジェクトでご利用いただけます。</>,
  },
]

function Feature({ title, description, Svg, className }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={className} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p className='text--left'>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
