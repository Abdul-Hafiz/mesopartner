# **********************************************************
# General configuration of a page
# **********************************************************
page = PAGE
page {
	meta.viewport = width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no
#	meta.X-UA-Compatible = IE=edge
#	meta.X-UA-Compatible.httpEquivalent = 1
}

page.headerData.5 = TEXT
page.headerData.5.value (
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
)

config {
	doctype = html5
	xmlprologue = none
	linkVars = L, print
	disablePrefixComment = 1

	compressJs = 1
	compressCss = 1
	concatenateJs = 1
	concatenateCss = 1
}

# **********************************************************
# Multilanguage configuration
# **********************************************************

# Default language - here German
config {
	sys_language_uid = 0
	language = de
	locale_all = de_DE.UTF-8
	htmlTag_langKey = de
	sys_language_mode = default
	sys_language_overlay = 0
}

# English
[globalVar = GP:L = 1]
	config {
		sys_language_uid = 1
		language = en
		locale_all = en_UK.UTF-8
		htmlTag_langKey = en
	}
[global]

# **********************************************************
# <title> - Tag
# **********************************************************
config.titleTagFunction = T3SBS\T3sbootstrap\Utility\TitleTag->get
config.titleTagFunction.data = page:nav_title // page:title
config.titleTagFunction.noTrimWrap = |{$plugin.t3sbootstrap_configuration.general.pageTitle.prefix} | {$plugin.t3sbootstrap_configuration.general.pageTitle.suffix}|
# news detail view -> news title in title-tag
[globalVar = GP:tx_news_pi1|news > 0]
	config.titleTagFunction.data =
	config.titleTagFunction.noTrimWrap = |{$plugin.t3sbootstrap_configuration.general.pageTitle.prefix} {register:newsTitle} {$plugin.t3sbootstrap_configuration.general.pageTitle.suffix}||
	config.titleTagFunction.insertData = 1
[global]


# **********************************************************
# <meta> - Tags
# *********************************************************
[globalVar = LIT:1 = {$plugin.t3sbootstrap_configuration.general.enable.metaTags}]
page.meta {
	description.data = levelfield :-1, description, slide
	description.override.field = description
	keywords.data = levelfield :-1, keywords, slide
	keywords.override.field = keywords
	revisit-after = 7 days
	robots = index, follow
}
[global]