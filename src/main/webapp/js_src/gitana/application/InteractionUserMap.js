(function(window)
{
    var Gitana = window.Gitana;
    
    Gitana.InteractionUserMap = Gitana.AbstractPlatformObjectMap.extend(
    /** @lends Gitana.InteractionUserMap.prototype */
    {
        /**
         * @constructs
         * @augments Gitana.AbstractPlatformObjectMap
         *
         * @class InteractionUserMap
         *
         * @param {Gitana.Application} application Gitana application instance.
         * @param [Object] object
         */
        constructor: function(application, object)
        {
            this.objectType = "Gitana.InteractionUserMap";


            //////////////////////////////////////////////////////////////////////////////////////////////
            //
            // PRIVILEGED METHODS
            //
            //////////////////////////////////////////////////////////////////////////////////////////////

            /**
             * Gets the Gitana Application object.
             *
             * @inner
             *
             * @returns {Gitana.Application} The Gitana Application object
             */
            this.getApplication = function() { return application; };

            /**
             * Gets the Gitana Application id.
             *
             * @inner
             *
             * @returns {String} The Gitana Application id
             */
            this.getApplicationId = function() { return application.getId(); };


            //////////////////////////////////////////////////////////////////////////////////////////////
            //
            // CALL THROUGH TO BASE CLASS (at the end)
            //
            //////////////////////////////////////////////////////////////////////////////////////////////

            this.base(application.getPlatform(), object);
        },

        /**
         * @override
         */
        clone: function()
        {
            return this.getFactory().interactionUserMap(this.getApplication(), this.object);
        },

        /**
         * @param json
         */
        buildObject: function(json)
        {
            return this.getFactory().interactionUser(this.getApplication(), json);
        }

    });

})(window);
