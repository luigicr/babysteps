$(document).ready(function ($) {
    var options = {
        $SlideDuration: 300,
        $SlideSpacing: 20,
        $PlayOrientation: 2,
        $DragOrientation: 0,
        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,
            $ChanceToShow: 2,
            $AutoCenter: 0,
            $DisplayPieces: 7,
            $ParkingPosition: 0,
            $Orientation: 2,
            $DisableDrag: true
        }
    },
    $tabs = $('.js-tabs'),
    $tabsContainer = $tabs.find('.js-tabs-container'),
    slider;

    $.ajax({
        url: $tabs.data('url'),
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType)
            {
                xhr.overrideMimeType("application/json");
            }
        }
//        dataType: 'jsop'
    }).done(function(data) {
        $.each(data.steps, function(index, step) {
            var tabsHeader = $('<header></header>', {
                    'class': 'clearfix'
                }),
                iconHeader = $('<span></span>', {
                    'class': step.image_name + ' sprite sprite-big'
                }),
                tabsHeaderTitle = $('<h4></h4>', {'text' : step.title}),
                tabsHeaderLegend = $('<span></span>', {
                    'text' : step.expenses,
                    'class' : 'legend'
                }),
                divSlide = $('<div></div>'),
                slideTitle = $('<div></div>', {
                    'class': 'test',
                    'u': 'thumb',
                    'text': step.title,
                    'data-icon': step.image_name 
                }),
                icon = $('<span></span>', {
                    'class': step.image_name + ' sprite'
                }),
                tabContent = $('<div></div>', {
                    'class': 'content'
                }),
                tabContainer = $('<div></div>', {
                    'class':'tabs-container',
                    'data-tab-content' : index
                }),
                tabMetaInfo = $('<div></div>', {
                    'class': 'meta-info'
                }),
                tabMetaInfoContent = $('<p></p>', {
                    'text': ' and Other friends are on this step'
                }),
                tabMetaInfoAnchor = $('<a>', {
                    'href': '#',
                    'text': 'Kathleen Baker, Ryan Larsen' 
                }),
                pText = step.content.split('\n'),
                pTextCount = step.content.split('\n').length;

            for (i = 0; i < pTextCount; i++) {
                $('<p></p>', {
                    'text': pText[i]
                }).appendTo(tabContent);
            }
            tabMetaInfoContent.prepend(tabMetaInfoAnchor);
            iconHeader.appendTo(tabsHeader);
            tabsHeaderTitle.appendTo(tabsHeader);
            tabsHeaderLegend.appendTo(tabsHeader);
            tabMetaInfoContent.appendTo(tabMetaInfo);
            tabsHeader.appendTo(tabContainer);
            tabContent.appendTo(tabContainer);
            tabMetaInfo.appendTo(tabContainer);
            tabContainer.appendTo(divSlide);
            slideTitle.append(icon);
            slideTitle.appendTo(divSlide);
            divSlide.appendTo($tabsContainer);
        });

        slider = new $JssorSlider$("slider3_container", options);
       
        function ScaleSlider() {
            var parentWidth = slider.$Elmt.parentNode.clientWidth;
            if (parentWidth)
                slider.$ScaleWidth(Math.min(parentWidth, 1920));
            else
                window.setTimeout(ScaleSlider, 30);
        }
        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
    });
});