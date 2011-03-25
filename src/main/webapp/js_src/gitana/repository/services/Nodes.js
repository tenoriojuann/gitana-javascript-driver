(function(window)
{
    var Gitana = window.Gitana;
    
    Gitana.Nodes = Gitana.AbstractBranchService.extend(
    /** @lends Gitana.Nodes.prototype */
    {
        /**
         * @constructs
         * @augments Gitana.AbstractBranchService
         *
         * @class Node service
         *
         * @param {Gitana.Branch} branch The branch to which the service should be constrained.
         */
        constructor: function(branch)
        {
            this.base(branch);
        },
        
        /**
         * Acquires a list of mount nodes under the root of the repository.
         *
         * @public
         * 
         * @param {Function} successCallback Function to call if the operation succeeds.
         * @param [Function] failureCallback Function to call if the operation fails.
         */
        list: function(successCallback, failureCallback)
        {
            var _this = this;

            var onSuccess = function(response)
            {
                response.list = _this.buildList(response.rows);

                successCallback(response);
            };

            var onFailure = this.wrapFailureCallback(failureCallback);

            // invoke
            this.getDriver().gitanaGet("/repositories/" + this.getRepositoryId() + "/branches/" + this.getBranchId() + "/nodes", onSuccess, onFailure);
        },

        /**
         * Reads a node.
         *
         * @public
         *
         * @param {String} nodeId the node id
         * @param {Function} successCallback Function to call if the operation succeeds.
         * @param [Function] failureCallback Function to call if the operation fails.
         */
        read: function(nodeId, successCallback, failureCallback)
        {
            var _this = this;

            var onSuccess = function(response)
            {
                var node = _this.build(response);

                successCallback(node);
            };

            var onFailure = this.wrapFailureCallback(failureCallback);

            // invoke
            this.getDriver().gitanaGet("/repositories/" + this.getRepositoryId() + "/branches/" + this.getBranchId() + "/nodes/" + nodeId, onSuccess, onFailure);
        },

        /**
         * Create a node
         *
         * @public
         *
         * @param [Object] object JSON object
         * @param {Function} successCallback Function to call if the operation succeeds.
         * @param [Function] failureCallback Function to call if the operation fails.
         */
        create: function()
        {
            var _this = this;

            var args = this.makeArray(arguments);

            var object = null;
            var successCallback = null;
            var failureCallback = null;
            if (args.length == 1)
            {
                successCallback = args.shift();
            }
            else if (args.length == 2)
            {
                object = args.shift();
                successCallback = args.shift();
            }
            else if (args.length == 3)
            {
                object = args.shift();
                successCallback = args.shift();
                failureCallback = args.shift();
            }

            var onSuccess = function(response)
            {
                successCallback(response);
            };

            var onFailure = this.wrapFailureCallback(failureCallback);

            // invoke
            this.getDriver().gitanaPost("/repositories/" + this.getRepositoryId() + "/branches/" + this.getBranchId() + "/nodes", object, onSuccess, onFailure);
        },

        /**
         * Delete a node
         *
         * @public
         *
         * @param {String} nodeId the node id
         * @param {Function} successCallback Function to call if the operation succeeds.
         * @param [Function] failureCallback Function to call if the operation fails.
         */
        del: function(nodeId, successCallback, failureCallback)
        {
            var _this = this;

            var onSuccess = function(response)
            {
                successCallback(response);
            };

            var onFailure = this.wrapFailureCallback(failureCallback);

            // invoke
            this.getDriver().gitanaDelete("/repositories/" + this.getRepositoryId() + "/branches/" + this.getBranchId() + "/nodes/" + nodeId, onSuccess, onFailure);
        }

    });

})(window);
