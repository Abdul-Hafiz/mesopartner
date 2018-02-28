[globalVar = LIT:1 = {$plugin.t3sbootstrap_configuration.general.contentSlide}]
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Lib/ContentSlide.ts">
[ELSE]
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Lib/Content.ts">
[global]
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Lib/General.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Lib/Navigation.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Lib/FluidContent.ts">