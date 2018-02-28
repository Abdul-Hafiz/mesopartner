# **********************************************************
# Rendering of all content columns
# **********************************************************

#-------------------------------------------------------------------------------
#	CONTENT: Main Content (colPos = 0)
#-------------------------------------------------------------------------------
lib.content.main >
lib.content.main = COA
lib.content.main {
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	1 = COA
	1 {
		10 = CONTENT
		10 {
			table = tt_content
			select.orderBy = sorting
			select.where.data = TSFE:id
			select.where.wrap = colPos=0 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
			slide = -1
			slide.collect = -1
			slide.if.isTrue = {$plugin.t3sbootstrap_configuration.general.contentSlide}
		}
		20 = CONTENT
		20 {
			table = tt_content
			select.orderBy = sorting
			select.where = colPos=0
		}
		30 = CONTENT
		30 {
			table = tt_content
			select.orderBy = sorting
			select.where.data = TSFE:id
			select.where.wrap = colPos=0 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
			slide = -1
			slide.collect = -1
			slide.if.isTrue = {$plugin.t3sbootstrap_configuration.general.contentSlide}
		}
		if.isTrue.data = level
	}
	2 = COA
	2 {
		10 = CONTENT
		10 {
			table = tt_content
			select.orderBy = sorting
			select.where = colPos=0
		}
		if.isFalse.data = level
	}
}
lib.content.0 < lib.content.main

#-------------------------------------------------------------------------------
#	CONTENT: Left Content (colPos = 1)
#-------------------------------------------------------------------------------
lib.content.left < lib.content.main
lib.content.left.1.10.select.where.wrap = colPos=1 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.left.1.20.select.where = colPos=1
lib.content.left.1.30.select.where.wrap = colPos=1 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.left.2.10.select.where = colPos=1
lib.content.1 < lib.content.left

#-------------------------------------------------------------------------------
#	CONTENT: Right Content (colPos = 2)
#-------------------------------------------------------------------------------
lib.content.right < lib.content.main
lib.content.right.1.10.select.where.wrap = colPos=2 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.right.1.20.select.where = colPos=2
lib.content.right.1.30.select.where.wrap = colPos=2 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.right.2.10.select.where = colPos=2
lib.content.2 < lib.content.right

#-------------------------------------------------------------------------------
#	CONTENT: Jumbotron Content (colPos = 3)
#-------------------------------------------------------------------------------
lib.content.jumbotron < lib.content.main
lib.content.jumbotron.1.10.select.where.wrap = colPos=3 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.jumbotron.1.20.select.where = colPos=3
lib.content.jumbotron.1.30.select.where.wrap = colPos=3 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.jumbotron.2.10.select.where = colPos=3
lib.content.3 < lib.content.jumbotron

#-------------------------------------------------------------------------------
#	CONTENT: Footer Content (colPos = 4)
#-------------------------------------------------------------------------------
lib.content.footer < lib.content.main
lib.content.footer.stdWrap.innerWrap = |
lib.content.footer.1.10.select.where.wrap = colPos=4 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.footer.1.20.select.where = colPos=4
lib.content.footer.1.30.select.where.wrap = colPos=4 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.footer.2.10.select.where = colPos=4
lib.content.4 < lib.content.footer

lib.content.footerFromPid >
lib.content.footerFromPid = CONTENT
lib.content.footerFromPid {
	table = tt_content
	select {
		orderBy = sorting
		where = colPos= 0
		pidInList = {$plugin.t3sbootstrap_configuration.pages.footer.content.pid}
	}
	if.isTrue = {$plugin.t3sbootstrap_configuration.pages.footer.content.pid}
}

#-------------------------------------------------------------------------------
#	CONTENT: More Content (colPos = 5 - 9)
#-------------------------------------------------------------------------------
lib.content.5 < lib.content.main
lib.content.5.1.10.select.where.wrap = colPos=5 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.5.1.20.select.where = colPos=5
lib.content.5.1.30.select.where.wrap = colPos=5 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.5.2.10.select.where = colPos=5


lib.content.6 < lib.content.main
lib.content.6.1.10.select.where.wrap = colPos=6 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.6.1.20.select.where = colPos=6
lib.content.6.1.30.select.where.wrap = colPos=6 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.6.2.10.select.where = colPos=6

lib.content.7 < lib.content.main
lib.content.7.1.10.select.where.wrap = colPos=7 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.7.1.20.select.where = colPos=7
lib.content.7.1.30.select.where.wrap = colPos=7 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.7.2.10.select.where = colPos=7

lib.content.8 < lib.content.main
lib.content.8.1.10.select.where.wrap = colPos=8 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.8.1.20.select.where = colPos=8
lib.content.8.1.30.select.where.wrap = colPos=8 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.8.2.10.select.where = colPos=8

lib.content.9 < lib.content.main
lib.content.9.1.10.select.where.wrap = colPos=9 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.9.1.20.select.where = colPos=9
lib.content.9.1.30.select.where.wrap = colPos=9 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.9.2.10.select.where = colPos=9

#-------------------------------------------------------------------------------
#	CONTENT: One Page Layout (colPos = 0)
#-------------------------------------------------------------------------------
lib.content.onePage >
lib.content.onePage = COA
lib.content.onePage {
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 = CONTENT
	10 {
		table = tt_content
		select.orderBy = sorting
		select.where = colPos=0
	}
}

#-------------------------------------------------------------------------------
#	CONTENT:Special slider (colPos = 10 / use in condition)
#-------------------------------------------------------------------------------
lib.content.slider < lib.content.main
lib.content.slider.1.10.select.where.wrap = colPos=10 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.slider.1.20.select.where = colPos=10
lib.content.slider.1.30.select.where.wrap = colPos=10 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.slider.2.10.select.where = colPos=10
lib.content.10 < lib.content.slider

#-------------------------------------------------------------------------------
#	CONTENT: Optional top and bottom (colPos = 20 + 21)
#-------------------------------------------------------------------------------
lib.content.20 < lib.content.main
lib.content.20.1.10.select.where.wrap = colPos=20 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.20.1.20.select.where = colPos=20
lib.content.20.1.30.select.where.wrap = colPos=20 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.20.2.10.select.where = colPos=20
lib.content.top < lib.content.20

lib.content.21 < lib.content.main
lib.content.21.1.10.select.where.wrap = colPos=21 AND tx_t3sbootstrap_content_slide=1 AND tt_content.pid NOT IN ( | )
lib.content.21.1.20.select.where = colPos=21
lib.content.21.1.30.select.where.wrap = colPos=21 AND tx_t3sbootstrap_content_slide=2 AND tt_content.pid NOT IN ( | )
lib.content.21.2.10.select.where = colPos=21
lib.content.bottom < lib.content.21

