
import { body, oneOf, validationResult, check, param } from 'express-validator';

export const expressValidator = (req, res, next) => {
        const errors = validationResult(req);
        var messages = [];
        if (!errors.isEmpty()) {
                for (const i of errors.array()) {
                        messages.push(i);
                }
                return res.status(400).send({ message: 'Bad Request', data: errors, status: 400 });
        }
        next();
};

// create new form validator
export const createFormBehaviourValidator = () => [
        body('name').notEmpty().withMessage('Name is required'),
        body('info').notEmpty().withMessage('Info is required'),
        body('config.conditions').notEmpty().withMessage('Conditions is required'),
        body('config.actions').notEmpty().withMessage('Actions is required'),
        body('lastModifiedById').notEmpty().withMessage('lastModifiedById is required'),
        body('lastModifiedBy').notEmpty().withMessage('lastModifiedBy is required'),
        body('createdById').notEmpty().withMessage('createdById is required'),
        body('createdBy').notEmpty().withMessage('createdBy is required')
]

export const updateStatusValidator = () => [
        param('status').notEmpty().isString().isIn(['active', 'inactive', 'deactivated',]).withMessage('Status does contain a valid value'),
]