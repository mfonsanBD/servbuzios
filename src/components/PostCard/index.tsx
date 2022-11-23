/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Button from 'components/Button'

import * as S from './styles'

import { TbMinusVertical } from 'react-icons/tb'
import { formatDateBlog } from 'utils/formatDate'

type CategoryData = {
  name: string
  slug: string
}

export type PostCardPorps = {
  sourceUrl: string
  title: string
  slug: string
  createdAt: string
  categories: CategoryData[]
}

const PostCard = ({
  sourceUrl,
  title,
  slug,
  createdAt,
  categories
}: PostCardPorps) => {
  const [isHover, setIsHover] = useState(false)

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <S.Wrapper>
      <motion.div
        className="card"
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        whileHover={{
          scale: 1.01
        }}
      >
        <S.ImageBox>
          <img src={sourceUrl} alt={title} />
        </S.ImageBox>

        <motion.div
          variants={container}
          initial={isHover ? 'hidden' : 'visible'}
          animate={isHover ? 'visible' : 'hidden'}
          className="content"
        >
          <motion.h3 variants={item}>{title}</motion.h3>

          <motion.small variants={item}>
            {categories.map((category, index) => (
              <a
                href={`/categoria/${category.slug}`}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                {category.name}
              </a>
            ))}

            <TbMinusVertical size={18} />

            <div className="createdAt">{formatDateBlog(createdAt)}</div>
          </motion.small>

          <motion.div variants={item}>
            <Button minimal as="a" href={`/post/${slug}`}>
              Ler Post
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </S.Wrapper>
  )
}

export default PostCard
