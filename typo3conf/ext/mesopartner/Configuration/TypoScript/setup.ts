######################
#### DEPENDENCIES ####
######################
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_package/Configuration/TypoScript/setup.typoscript">

# **********************************************************
# Multilanguage configuration
# **********************************************************

# Default language - here German
config {
    sys_language_uid = 0
    language = en
    locale_all = en_US.UTF-8
    htmlTag_langKey = en
    sys_language_mode = default
    sys_language_overlay = 1
}

# English
[globalVar = GP:L = 1]
    config {
        sys_language_uid = 1
        language = es
        locale_all = es_ES.UTF-8
        htmlTag_langKey = es
    }
[global]

##############
#### PAGE ####
##############
page {

    meta{
        viewport = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no
        X-UA-Compatible = IE=edge
        X-UA-Compatible {
            attribute = http-equiv
        }
        format-detection = telephone=no
        application-name = Mesopartner
    }
    headerData.5.value (
        <link rel="apple-touch-icon" sizes="180x180" href="typo3conf/ext/mesopartner/Resources/Public/images/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="typo3conf/ext/mesopartner/Resources/Public/images/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="typo3conf/ext/mesopartner/Resources/Public/images/favicon/favicon-16x16.png">
        <link rel="manifest" href="typo3conf/ext/mesopartner/Resources/Public/images/favicon/site.webmanifest">
    )

    includeCSSLibs {
        googlewebfont >
    }

    includeCSS {
        app = EXT:mesopartner/Resources/Public/vendor/css/app.css
        default = EXT:mesopartner/Resources/Public/css/default.css
    }

    includeJSLibs {

    }

    includeJS {
        jquery = EXT:mesopartner/Resources/Public/vendor/js/jquery-2.1.4.min.js
    }

    includeJSFooterlibs {

    }

    includeJSFooter {
        bootstrap = EXT:mesopartner/Resources/Public/vendor/js/bootstrap.min.js
        carousel = EXT:mesopartner/Resources/Public/vendor/js/owl.carousel.min.js
        default = EXT:mesopartner/Resources/Public/js/default.js
    }
    10 {
        file = EXT:mesopartner/Resources/Private/Templates/Main.html
        partialRootPaths.20 = EXT:mesopartner/Resources/Private/Partials/ 
        layoutRootPaths.20 = EXT:mesopartner/Resources/Private/Layouts/
        settings.homepage.uid = {$plugin.t3sbootstrap_configuration.pages.homepage.uid}
    }
}
lib.general.logo = TEXT
lib.general.logo.value = fileadmin/images/logo.svg

lib.navigation.top = HMENU
lib.navigation.top{
    special = directory
    special.value = {$plugin.t3sbootstrap_configuration.pages.topmenu.uid}
    1 = TMENU
    1 {
        expAll = 1

        NO = 1
        NO {
            wrapItemAndSub = <li>|</li>
            stdWrap.htmlSpecialChars = 1
        }
    }
}

lib.navigation.main.10{
    1{
        IFSUB.wrapItemAndSub = <li class="has-megamenu">|</li>
        IFSUB.ATagParams = 
        IFSUB.linkWrap = 
        ACTIFSUB.wrapItemAndSub = <li class="active has-megamenu">|</li>
    }
    2 {
        wrap = <div class="arrow visible-xs visible-sm"><i class="glyphicon glyphicon-chevron-down"></i></div><div class="megamenu-main"><div class="container"><div class="row">|</div></div></div>
        IFSUB.ATagBeforeWrap = 0
        IFSUB.wrapItemAndSub = <div class="col-md-3"><ul><li>|</li></ul></div>
        NO.wrapItemAndSub = <div class="col-md-3"><ul><li>|</li></ul></div>
        CUR.wrapItemAndSub = <div class="col-md-3"><ul><li>|</li></ul></div>
        ACT.wrapItemAndSub = <div class="col-md-3"><ul><li>|</li></ul></div>
        IFSUB.ATagParams = 
        IFSUB.linkWrap.insertData = 1
        IFSUB.linkWrap = | <p>{field:subtitle}</p>
        ACTIFSUB.wrapItemAndSub =  <div class="col-md-3"><ul><li>|</li></ul></div>
        stdWrap.append= CONTENT
        stdWrap.append{
            table = pages
            select {
              uidInList.field = pid
              max = 1
            }
            renderObj = COA
            renderObj{
                10 = TEXT
                10.field = abstract
                10.wrap = |&nbsp;
                20 = TEXT
                20.value = more
                20.typolink.parameter.field = uid 
                20.typolink.insertData = 1 
            }
            stdWrap.wrap = <div class="col-md-3"><div class="menu-teaser"><p>|</p></div></div>
        }
        
    }
    3{
        wrap = <div class="arrow visible-xs visible-sm"><i class="glyphicon glyphicon-chevron-down"></i></div><ul>|</ul>
        IFSUB.wrapItemAndSub = 
    }
}

lib.navigation.languageswitch.wrap =
lib.navigation.languageswitch.5 >
lib.navigation.languageswitch.10.wrap =
lib.navigation.languageswitch.10.1.ACT.wrapItemAndSub = <li style="display:none;">|</li>


lib.navigation.footer{
    10{
        excludeUidList = {$plugin.t3sbootstrap_configuration.navigation.footer.excludeUidList}
        special >
        special.value >
        1{
            NO.wrapItemAndSub = <div class="col-md-2 hidden-xs hidden-sm col-md-offset-1"><ul><li>|</li></ul></div>|*|<div class="col-md-2 hidden-xs hidden-sm"><ul><li>|</li></ul></div>
        }
        2 < .1
        2{
            wrap = <ul>|</ul>
            NO.wrapItemAndSub = <li>|</li>
        }
        3 < .2
        3{
            wrap = <ul>|</ul>
        }
    }
    20 >
    wrap >
}

lib.socialmedialTop = CONTENT
lib.socialmedialTop{
    table = tt_content
    select{
        pidInList = 31
        where = colPos = 0
        andWhere = sys_language_uid = 0
    }   
}
lib.socialmedialFooter < lib.socialmedialTop
lib.socialmedialFooter.select.where = colPos = 4 