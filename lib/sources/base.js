/**
 * @fileoverview Provide zz.ui.mdl.spinner base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.spinner' );

goog.require( 'zz.ui.mdl.Spinner' );
goog.require( 'zz.ui.mdl.spinner.tpl' );
/**
 * Base namespace for zz.ui.mdl.spinner module.
 * @const
 */
zz.ui.mdl.spinner = zz.ui.mdl.spinner || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.spinner.bootstrap = function( ){

    soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.spinner.tpl.default );

	var spn1 = new zz.ui.mdl.Spinner( );
		spn1.decorate( goog.dom.getElement( '1' ) );
	var spn2 = new zz.ui.mdl.Spinner( );
		spn2.decorate( goog.dom.getElement( '2' ) );
};
goog.exportSymbol( 'zz.ui.mdl.spinner.bootstrap', zz.ui.mdl.spinner.bootstrap );