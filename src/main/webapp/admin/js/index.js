/***************************************************************************
 *                                                                         *
 * Auto Generated BY CodeComment                                           *
 * Copyright(C) 2000-2016, JiangSu Yinhe Electronic Co.Ltd.                *
 * All Rights Reserved.                                                    *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF Yinhe Elec Co.Ltd.       *
 * The copyright notice above does not evidence any actual or intended     *
 * publication of such source code.                                        *
 *                                                                         *
 **************************************************************************/

$('.track').click( function() {    $indicator = $('.indicator');    if( $indicator.hasClass('switch-on') ) {        $indicator.removeClass('switch-on').addClass('switch-off');        }    else {        $indicator.removeClass('switch-off').addClass('switch-on');        location.href='#{defaultDisplayController.tableToFigure()}'    }});