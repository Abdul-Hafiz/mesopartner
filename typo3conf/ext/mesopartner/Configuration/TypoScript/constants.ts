######################
#### DEPENDENCIES ####
######################
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_package/Configuration/TypoScript/constants.typoscript">


############
### PAGE ###
############
page {
    fluidtemplate {
        layoutRootPath = EXT:mesopartner/Resources/Private/Layouts/Page/
        partialRootPath = EXT:mesopartner/Resources/Private/Partials/Page/
        templateRootPath = EXT:mesopartner/Resources/Private/Templates/Page/
    }
}
plugin.t3sbootstrap_configuration{
    pages {
        # cat=t3sbootstrap/b-pages/03; type=int+; label=TopMenu Uid:
        topmenu.uid =         
    }
    navigation{
    	# cat=t3sbootstrap/c-navigation/16; type=int+; label=Footer Menu ExcludeUidList
    	footer.excludeUidList = 
	}
}
