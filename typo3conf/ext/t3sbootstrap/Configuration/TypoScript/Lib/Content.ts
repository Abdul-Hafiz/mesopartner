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
	10 = CONTENT
	10 {
		table = tt_content
		select.orderBy = sorting
		select.where = colPos=0
	}
}
lib.content.0 < lib.content.main

#-------------------------------------------------------------------------------
#	CONTENT: Left Content (colPos = 1)
#-------------------------------------------------------------------------------
lib.content.left < lib.content.main
lib.content.left.10.select.where = colPos=1
lib.content.1 < lib.content.left

#-------------------------------------------------------------------------------
#	CONTENT: Right Content (colPos = 2)
#-------------------------------------------------------------------------------
lib.content.right < lib.content.main
lib.content.right.10.select.where = colPos=2
lib.content.2 < lib.content.right

#-------------------------------------------------------------------------------
#	CONTENT: Jumbotron Content (colPos = 3)
#-------------------------------------------------------------------------------
lib.content.jumbotron < lib.content.main
lib.content.jumbotron.10.select.where = colPos=3
lib.content.3 < lib.content.jumbotron

#-------------------------------------------------------------------------------
#	CONTENT: Footer Content (colPos = 4)
#-------------------------------------------------------------------------------
lib.content.footer < lib.content.main
lib.content.footer.10.select.where = colPos=4
lib.content.4 < lib.content.footer

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
lib.content.5.10.select.where = colPos=5
lib.content.6 < lib.content.main
lib.content.6.10.select.where = colPos=6
lib.content.7 < lib.content.main
lib.content.7.10.select.where = colPos=7
lib.content.8 < lib.content.main
lib.content.8.10.select.where = colPos=8
lib.content.9 < lib.content.main
lib.content.9.10.select.where = colPos=9

#-------------------------------------------------------------------------------
#	CONTENT: One Page Layout (colPos = 0)
#-------------------------------------------------------------------------------
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
lib.content.slider.10.select.where = colPos=10
lib.content.10 < lib.content.slider

#-------------------------------------------------------------------------------
#	CONTENT: Optional top and bottom (colPos = 20 + 21)
#-------------------------------------------------------------------------------
lib.content.20 < lib.content.main
lib.content.20.10.select.where = colPos=20
lib.content.top < lib.content.20

lib.content.21 < lib.content.main
lib.content.21.10.select.where = colPos=21
lib.content.bottom < lib.content.21
