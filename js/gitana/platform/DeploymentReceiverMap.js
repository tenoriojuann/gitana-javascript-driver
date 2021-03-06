(function(window)
{
    var Gitana = window.Gitana;
    
    Gitana.DeploymentReceiverMap = Gitana.AbstractPlatformObjectMap.extend(
    /** @lends Gitana.DeploymentReceiverMap.prototype */
    {
        /**
         * @constructs
         * @augments Gitana.AbstractMap
         *
         * @class Map of deployment receivers
         *
         * @param {Gitana.Platform} platform Gitana platform instance.
         * @param [Object] object
         */
        constructor: function(platform, object)
        {
            this.objectType = function() { return "Gitana.DeploymentReceiverMap"; };


            //////////////////////////////////////////////////////////////////////////////////////////////
            //
            // CALL THROUGH TO BASE CLASS (at the end)
            //
            //////////////////////////////////////////////////////////////////////////////////////////////

            this.base(platform, object);
        },

        /**
         * @override
         */
        clone: function()
        {
            return this.getFactory().deploymentReceiverMap(this.getPlatform(), this);
        },

        /**
         * @param json
         */
        buildObject: function(json)
        {
            return this.getFactory().deploymentReceiver(this.getPlatform(), json);
        }

    });

})(window);
